import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

const TaskItem = ({task, deleteCurrentTask, ...props}) => {

    return (
        <View style={styles.taskContainer}>
            <Text style={styles.text}>
                {task.item.title}
            </Text>
            <Text style={styles.date}>
                {task.item.date}
            </Text>
            <Button title={'Удалить'} onPress={() => deleteCurrentTask(task.index)} />
        </View>
    )
}

export default TaskItem

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 7,
    },

    text: {
        marginBottom: 10,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    date: {
        fontSize: 12,
        marginBottom: 10,
        alignSelf: 'flex-end',
    },
})
