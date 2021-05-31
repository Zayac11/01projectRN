import React, {useEffect, useState} from 'react'
import Task from './Task'
import {useDispatch, useSelector} from 'react-redux'
import {addNewTask, deleteTask, getTasks} from '../../redux/task-reducer'

const TaskContainer = (props) => {


    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task.tasks)

    const [title, setTitleValue] = useState('')

    useEffect(() => {
        dispatch(getTasks())
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

            // <Animated.View style={{opacity}}>
                <Task tasks={tasks} addTask={addTask} deleteCurrentTask={deleteCurrentTask} setTitleValue={setTitleValue} title={title} />
            // <Animated.View>

    )
}

export default TaskContainer
