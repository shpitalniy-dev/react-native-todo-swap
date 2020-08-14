import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';

type Props = {
    title: string,
}

export const NavBar:React.FunctionComponent<Props> = props => {
    const { title } = props;

    return (
        <View style={styles.navBar}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        height: 70,
        alignItems: 'center',
        paddingBottom: 10,
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});