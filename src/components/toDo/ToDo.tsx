import React, { useState, useRef } from 'react';
import {
    Text,
    View,
    Animated,
    StyleSheet,
    Dimensions,
    PanResponder,
    TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ITodo } from '../../interfaces/interfaces';

type Props = {
    todo: ITodo;
    setIsDone(id: String, isDone: Boolean): void;
    deleteTodo(id: String): void;
};

export const ToDo: React.FunctionComponent<Props> = (props) => {
    const {
        todo,
        setIsDone,
        deleteTodo,
    } = props;

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: pan.x,
                    }
                ]
            ),
            onPanResponderRelease: (e, { dx }) => {
                const screenWidth = Dimensions.get('window').width;
                if (Math.abs(dx) > 0.5 * screenWidth) {
                    deleteTodo(todo.id);
                } else {
                    Animated.spring(
                        pan, 
                        { toValue: { x: 0, y: 0 } }
                    ).start();
                }
            },
        })
    ).current;

    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }],
                ...styles.todo,
            }}
            {...panResponder.panHandlers}
        >
            <CheckBox
                value={todo.isDone}
                onValueChange={(isDone: Boolean) => setIsDone(todo.id, isDone)}
            />
            <Text style={todo.isDone ? styles.line : null}>
                {todo.title}
            </Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    todo: {
        padding: 15,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
    },
    line: {
        textDecorationLine: 'line-through',
    },
});
