import React, {useEffect} from 'react'
import Task from './Task'
import {useDispatch, useSelector} from 'react-redux'
import {deleteTask, getTasks} from '../../redux/task-reducer'

const TaskContainer = ({navigation, ...props}) => {

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task.tasks)

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    const deleteCurrentTask = (index) => {
        dispatch(deleteTask(index))
    }

    const onAdd = () => {
        navigation.navigate('Modal');
    };

    return (
        // <SafeAreaView style={{flex: 1}}>
            <Task onAdd={onAdd} tasks={tasks} deleteCurrentTask={deleteCurrentTask} />
        // </SafeAreaView>

    )
}

export default TaskContainer
