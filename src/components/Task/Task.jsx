import React from 'react'
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'

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

                <View style={styles.tasksContainer}>
                    {
                        props.tasks && props.tasks.length > 0 &&
                        props.tasks.map((task, index) => {
                            return (
                                <View style={styles.taskContainer} key={index}>
                                    <Text style={styles.text}>
                                        {task.title}
                                    </Text>
                                    <Text style={styles.date}>
                                        {task.date}
                                    </Text>
                                    <Button title={'Удалить'} onPress={() => props.deleteCurrentTask(index)} />
                                </View>
                            )
                        })
                    }
                </View>

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
        alignItems: 'center',
        marginBottom: 30,
    },

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
