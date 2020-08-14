import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/redux/rootReducer';
import rootSaga from './src/saga/sagas';
import { ToDoList } from './src/components/toDoList/ToDoList';
import { MoveableComponent } from './src/components/moveableComponent/MoveableComponent';

const Stack = createStackNavigator();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={ToDoList}
          />
          <Stack.Screen 
            name='Test'
            component={MoveableComponent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider> 
  );
};

export default App;