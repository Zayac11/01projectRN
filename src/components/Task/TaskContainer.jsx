import React, {useState} from 'react'
import Task from './Task'
import {useDispatch, useSelector} from 'react-redux'
import {addNewTask} from '../../redux/task-reducer'

const TaskContainer = (props) => {

    const dispatch = useDispatch()
    const tasks = useSelector(state => state.task.tasks)

    const [title, setTitleValue] = useState('')

    const addTask = () => {
        const data = {
            title: title,
            date: (new Date).toLocaleDateString() + ' ' + (new Date).toLocaleTimeString(),
        }
        dispatch(addNewTask(data))
        setTitleValue('')
    }

    return (
        <Task tasks={tasks} addTask={addTask} setTitleValue={setTitleValue} title={title} />
    )
}

export default TaskContainer
