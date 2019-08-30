const initialState = {
    userId: 'test',
    password: '1234',
    authenticated: false,
    dataArr: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'GET_DATA') {
        return {
            ...state, 
            dataArr: action.response
        }
    }

    if(action.type === 'AUTH') {
        console.log(action);
        if(action.ID === state.userId && action.PASS === state.password) {
            return {
                ...state,
                authenticated: true
            }
        } else {
            return {
                ...state,
                authenticated: false
            }
        }
    }

    return state;
};

export default reducer;