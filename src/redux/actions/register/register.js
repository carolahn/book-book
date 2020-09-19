import axios from 'axios'

export const REGISTER_SUCESS = 'REGISTER_SUCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'
export const REGISTER_RESET = 'REGISTER_RESET'

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

export const resetRegisterScreen = (status) => ({
  type: REGISTER_RESET,
  status
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
