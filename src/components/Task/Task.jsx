import React from 'react'
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import TaskItem from './TaskItem'

const Task = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.tasksContainer}>
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
                    return <TaskItem task={task} />
                }} keyExtractor={(item, index) => index.toString()} />
            </View>
        </ScrollView>
    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },

    textarea: {
        textAlignVertical: 'top',
        padding: 10,
        minHeight: 75,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
        marginBottom: 20,
    },

    button: {
        color: 'black',
    },

    tasksContainer: {
        width: '100%',
        marginBottom: 30,
    },
})
