import axios from 'axios';
import LOGIN_ACTIONS from './login-action-types';

const login_successeful = (username = '', token = '') => {
    return {
        type: LOGIN_ACTIONS.LOGIN_SUCCESSFUL,
        username, token
    }
}

const login_unssuccessfull = (error_message) => {
    return {
        type: LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL,
        error_message
    }
}

export const login = (username, password) => async (dispatch) => {
    await axios({
        method: 'post',
        url: 'https://ka-users-api.herokuapp.com/authenticate',
        data: {
            user: username,
            password: password
        }
    })
    .then(response => dispatch(login_successeful(username, response.data.auth_token)))
    .catch(err => dispatch(login_unssuccessfull('Invalid credentials')));
}

const login_logout = ()  => {
    return {
        type: LOGIN_ACTIONS.LOGOUT
    }
}

export const logout = () => (dispatch) => {
    dispatch(login_logout())
}