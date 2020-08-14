import React, { useState } from 'react';
import {
    View,
    Alert,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';
import { ITodo } from '../../interfaces/interfaces';

type Props = {
    addTodo: Function,
}

export const AddTodo: React.FunctionComponent<Props> = props => {
    const { addTodo } = props;

    const [value, setValue] = useState<String>('');

    const addNewTodo = (): void => {
        if (value.trim()) {
            const newTodo: ITodo = {
                id: Date.now().toString(),
                title: value,
                isDone: false,
            }

            setValue('');
            addTodo(newTodo);
        } else {
            Alert.alert('Incorrect todo`s name');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                value={value}
                style={styles.input}
                autoCorrect={false}
                placeholder={'Enter todo`s name...'}
                onChangeText={(text: string): void => setValue(text)}
                autoCapitalize='none'
            />
            <Button 
                title={'Add'}
                onPress={addNewTodo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    },
});