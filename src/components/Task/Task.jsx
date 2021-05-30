import React from 'react'
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import TaskItem from './TaskItem'

const Task = (props) => {
    return (

        <View style={styles.container}>
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
                <FlatList style={styles.tasksContainer} data={props.tasks} renderItem={(task) => {
                    return <TaskItem deleteCurrentTask={props.deleteCurrentTask} task={task} />
                }} keyExtractor={(item, index) => index.toString()} />
        </View>

    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },

    formContainer: {
        width: '100%',
        marginBottom: 30,
    },

    textarea: {
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

    tasksContainer: {
        width: '100%',
    },
})
