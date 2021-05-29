import {taskApi} from '../api/api'

const ADD_TASK = 'ADD_TASK'
const SET_TASKS = 'SET_TASKS'
const DELETE_TASK = 'DELETE_TASK'

let initialState = {
    tasks: [],
    tasksIds: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.data]
            }
        case SET_TASKS:
            return {
                ...state,
                tasks: Object.values(action.tasks),
                tasksIds: Object.keys(action.tasks),
            }
        case DELETE_TASK:

            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.index),
                tasksIds: state.tasksIds.filter((id, index) => index !== action.index)

            }
        default:
            return state;
    }
}

// export const setNewTask = (data) => ({type: ADD_TASK, data})
export const setTasks = (tasks) => ({type: SET_TASKS, tasks})
export const removeTask = (index) => ({type: DELETE_TASK, index})

export const getTasks = () => {
    return async (dispatch) => {
        try {
            let data = await taskApi.getTasks()
            if (data !== null) {
                dispatch(setTasks(data))
            }
        }
        catch (error) {
            alert('getTasks error')
        }
    }
}

export const addNewTask = (task) => {
    return async (dispatch) => {
        try {
            await taskApi.addTask(task)
            dispatch(getTasks())
        }
        catch (error) {
            alert('addNewTask error')
        }
    }
}

export const deleteTask = (index) => {
    return async (dispatch, getState) => {
        let tasksIds = getState().task.tasksIds
        try {
            await taskApi.deleteTask(tasksIds[index])
            dispatch(removeTask(index))
        }
        catch (error) {
            alert('addNewTask error')
        }
    }
}


export default taskReducer
