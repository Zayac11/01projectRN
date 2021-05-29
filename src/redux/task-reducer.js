

let initialState = {
    data: 'Kirill',
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,

            }
        default:
            return state;
    }
}

export const setPopularAndPinnedNews = (news) => ({type: '', news})


export const getPopularAndPinnedNews = () => {
    return async (dispatch) => {
        try {

        }
        catch (error) {

        }
    }
}


export default taskReducer
