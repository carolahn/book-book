import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const REGISTER_SUCESS = 'REGISTER_SUCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

 const registerSucess = (sucess) => ({
  type: REGISTER_SUCESS,
  sucess
})

const registerFailed = (failed, userError, emailError) => ({
  type: REGISTER_FAILED,
  failed,
  userError,
  emailError
})



export const requestRegisterData = (name, username, email, password, confirmPassword) => async (dispatch) => {

  await axios.post('https://ka-users-api.herokuapp.com/users', {
    headers: {
      'content-type': 'application/json'
    },
    user: {
        name: name,
        user: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword
    
  }
  })
  .then((res) => {
    dispatch(registerSucess(true))
  })
  .catch((err) => {
    dispatch(registerFailed(false, err.response.data.user, err.response.data.email))
  })
}