import React, {useEffect, useRef, useState} from 'react'
import Task from './Task'
import {useDispatch, useSelector} from 'react-redux'
import {addNewTask, deleteTask, getTasks} from '../../redux/task-reducer'
import Header from '../../common/Header'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Animated} from 'react-native-web'

const TaskContainer = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task.tasks)

    const [title, setTitleValue] = useState('')

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start();
    }, [])

    const deleteCurrentTask = (index) => {

        dispatch(deleteTask(index))
    }

    const addTask = () => {
        const data = {
            title: title,
            date: (new Date).toLocaleDateString() + ' ' + (new Date).toLocaleTimeString(),
        }
        dispatch(addNewTask(data))
        setTitleValue('')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Animated.View style={{opacity: fadeAnim}}>
                <Header title={'Мои задачи'} />
                <Task tasks={tasks} addTask={addTask} deleteCurrentTask={deleteCurrentTask} setTitleValue={setTitleValue} title={title} />
            </Animated.View>
        </SafeAreaView>
    )
}

export default TaskContainer
