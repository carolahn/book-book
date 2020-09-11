import axios from 'axios';

const login = (username, password) => (dispatch) => {
    axios({
        method: 'post',
        url: 'https://ka-users-api.herokuapp.com/authenticate',
        data: {
            user: username,
            password: password
        }
    })
    .then(response => console.log(response.data.auth_token))
    .catch(err => console.error(err));
}

export default login;