import { REGISTER_SUCESS, REGISTER_FAILED } from '../actions/action-register'

const defaultState = {
    status: null,
    user: '',
    email: ''
}

const register = (state = defaultState, action) => {
  switch(action.type) {
    case REGISTER_SUCESS: 
      return {
        ...state,
        status: action.sucess
      }
    
    case REGISTER_FAILED: 
      return {
        ...state,
        status: action.failed,
        user: action.userError,
        email: action.emailError

      }

      default: 
        return state;
    }
}

export default register;
