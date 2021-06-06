import React, {useState} from 'react'
import {Button, FlatList, Animated , StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import TaskItem from './TaskItem'
import AddButton from './AddButton'

const Task = ({onAdd, ...props}) => {

    return (

        <View style={styles.container}>

                <FlatList style={styles.tasksContainer} data={props.tasks} renderItem={(task) => {
                    return <TaskItem deleteCurrentTask={props.deleteCurrentTask} task={task} />
                }} keyExtractor={(item, index) => index.toString()} />

            {/*<AddButton onAdd={onAdd} />*/}

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

    tasksContainer: {
        width: '100%',
    },

    btnContainer: {
        // backgroundColor: '#2196f3',
        backgroundColor: 'navy',
        width: 55,
        height: 55,
        borderRadius: 28,
        position: 'absolute',
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        zIndex: 1,
        elevation: 1,
    },

    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
})
