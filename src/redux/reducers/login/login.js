import LOGIN_ACTIONS from '../../actions/login/login-action-types';

const defaultState = {
    error: '',
    error_message: '',
    id: localStorage.getItem('book-book-token') ? parseInt(JSON.parse(localStorage.getItem('book-book-token')).id) : "",
    username: localStorage.getItem('book-book-token') ? JSON.parse(localStorage.getItem('book-book-token')).username : "",
    token: localStorage.getItem('book-book-token') ? JSON.parse(localStorage.getItem('book-book-token')).token : "",
    login_status: localStorage.getItem('book-book-token') ? true : false,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_SUCCESSFUL: 
            localStorage.setItem('book-book-token', JSON.stringify({token: `${action.token}`, id: `${action.userId}`, username: `${action.username}`}));
            return { ...state, error: "", error_message: "", id: action.userId, username: action.username, token: action.token, login_status: true};

        case LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL:
            return { ...state, error: 401, error_message: action.error_message, login_status: false, token: '', id: '', username: ''};

        case LOGIN_ACTIONS.LOGOUT:
            localStorage.getItem('book-book-token') && localStorage.removeItem('book-book-token');
            return { ...state, error: '', error_message: '', id: '', username: '', token: '', login_status: false};

        default:
            return state;
    }    
}

export default reducer;