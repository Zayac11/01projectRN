import React, {useState} from 'react'
import {Button, FlatList, Animated , StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import TaskItem from './TaskItem'

const Task = ({onAdd, ...props}) => {

    const [scaleValue] = useState(new Animated.Value(0));
    const onButtonClicked = () => {
        // Don't forget about the callback function for Animated.timing.
        // After we finish scaling, we need to set the scale value back to 0;
        // If we don't do that, when we go back to the Home screen our button will still be scaled
        Animated.timing(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
            duration: 700,
        }).start(() => { scaleValue.setValue(0); });
        onAdd();
    };
    const scaleValueInterpolation = scaleValue.interpolate({
        inputRange: [0, 0.25, 1],
        outputRange: [1, 20, 30],
    });

    return (

        <View style={styles.container}>

                <FlatList style={styles.tasksContainer} data={props.tasks} renderItem={(task) => {
                    return <TaskItem deleteCurrentTask={props.deleteCurrentTask} task={task} />
                }} keyExtractor={(item, index) => index.toString()} />

            <>
                <Animated.View
                    style={[styles.btnContainer,
                        { transform: [{ scale: scaleValueInterpolation }] },
                    ]}
                />
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={onButtonClicked}
                >
                    <Text style={styles.text}>
                        +
                    </Text>
                </TouchableOpacity>
            </>

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

    // formContainer: {
    //     width: '100%',
    //     marginBottom: 30,
    // },
    //
    // textarea: {
    //     textAlignVertical: 'top',
    //     padding: 10,
    //     width: '100%',
    //     borderStyle: 'solid',
    //     borderBottomWidth: 1,
    //     borderColor: 'black',
    //     marginBottom: 20,
    // },
    //
    // button: {
    //     color: 'black',
    // },

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
