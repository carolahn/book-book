import LOGIN_ACTIONS from '../../actions/login/login-action-types';

const defaultState = {
    error: '',
    error_message: '',
    id: localStorage.getItem('book-book-token') ? 
        JSON.parse(localStorage.getItem('book-book-token')).id ? 
        parseInt(JSON.parse(localStorage.getItem('book-book-token')).id) : "" : "",
    username: localStorage.getItem('book-book-token') ? 
              JSON.parse(localStorage.getItem('book-book-token')).username ?
              JSON.parse(localStorage.getItem('book-book-token')).username : "" : "",
    token: localStorage.getItem('book-book-token') ? 
           JSON.parse(localStorage.getItem('book-book-token')).token ?
           JSON.parse(localStorage.getItem('book-book-token')).token : "" : "",
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_SUCCESSFUL: 
            localStorage.setItem('book-book-token', JSON.stringify({token: `${action.token}`, id: `${action.userId}`, username: `${action.username}`}));
            return { ...state, error: "", error_message: "", id: action.userId, username: action.username, token: action.token};

        case LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL:
            return { ...state, error: 401, error_message: action.error_message, token: '', id: '', username: ''};

        case LOGIN_ACTIONS.LOGOUT:
            localStorage.getItem('book-book-token') && localStorage.removeItem('book-book-token');
            return { ...state, error: '', error_message: '', id: '', username: '', token: ''};

        default:
            return state;
    }    
}   

export default reducer;