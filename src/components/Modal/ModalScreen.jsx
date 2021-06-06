import React from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'

const ModalScreen = (props) => {
    return (
        <View style={styles.formContainer}>
            <TextInput multiline={true}
                       placeholder={'Write new task'}
                       style={styles.textarea}
                       value={props.title}
                       onChangeText={(value) => props.setTitleValue(value)}
            />
            <View style={styles.button}>
                <Button onPress={props.addTask} title={'Добавить'} />
            </View>
        </View>
    )
}

export default ModalScreen

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        marginBottom: 30,
        padding: 20,
    },

    textarea: {
        // color: 'white',
        backgroundColor: 'white',
        textAlignVertical: 'top',
        padding: 10,
        width: '100%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    },

    button: {
        color: 'black',
    },
})
