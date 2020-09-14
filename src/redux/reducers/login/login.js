import LOGIN_ACTIONS from '../../actions/login/login-action-types';

const defaultState = {
    error: '',
    error_message: '',
    username: '',
    token: localStorage.getItem('book-book-token') ? localStorage.getItem('book-book-token') : "",
    login_status: localStorage.getItem('book-book-token') ? true : false,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_SUCCESSFUL: 
            localStorage.setItem('book-book-token', action.token);
            return { ...state, username: action.username, token: action.token, login_status: true};

        case LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL:
            return { ...state, error: action.error, error_message: "invalid credencials", login_status: false, token: ''};

        case LOGIN_ACTIONS.LOGOUT:
            localStorage.getItem('book-book-token') && localStorage.removeItem('book-book-token');
            return { ...defaultState, token: '', login_status: false};

        default:
            return state;
    }    
}

export default reducer;