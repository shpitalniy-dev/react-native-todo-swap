/* eslint-disable prettier/prettier */
import React, { useRef, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  Animated,
  StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from './selectors';
import * as actions from './actions';
import { NavBar } from '../navBar/NavBar';
import { AddTodo } from '../addTodo/AddTodo';
import { ToDo } from '../toDo/ToDo';
import { ITodo } from '../../interfaces/interfaces';

type Props = {
  navigation: any;
};

export const ToDoList: React.FunctionComponent<Props> = props => {
  const { navigation } = props;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const todos = useSelector(selectors.getTodos);

  const dispatch = useDispatch();

  const addTodo = useCallback((newTodo: ITodo) => {
    dispatch(actions.addTodo({ newTodo }));
  }, [dispatch]);

  const deleteTodo = useCallback((id: String) => {
    dispatch(actions.deleteTodo({ id }));
  }, [dispatch]);

  const setIsDone = useCallback((id: String, isDone: Boolean) => {
    dispatch(actions.setIsDone({ id, isDone }));
  }, [dispatch]);

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <>
      <View style={{ width: '100%', height: '100%' }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Button
            title={'Go to test'}
            onPress={() => navigation.navigate('Test')}
          />
        </Animated.View>
        <NavBar title={'Todo App'} />
        <View style={styles.container}>
          <AddTodo addTodo={addTodo} />
          <FlatList
            data={todos}
            renderItem={({ item }) =>
              <ToDo
                todo={item}
                setIsDone={setIsDone}
                deleteTodo={deleteTodo}
              />
            }
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
