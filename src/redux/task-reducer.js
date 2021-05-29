
const ADD_TASK = 'ADD_TASK'

let initialState = {
    tasks: [
        {title: 'Купить воды', date: (new Date).toLocaleDateString() + ' ' + (new Date).toLocaleTimeString()},
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.data]
            }
        default:
            return state;
    }
}

export const addNewTask = (data) => ({type: ADD_TASK, data})


export const getPopularAndPinnedNews = () => {
    return async (dispatch) => {
        try {

        }
        catch (error) {

        }
    }
}


export default taskReducer
