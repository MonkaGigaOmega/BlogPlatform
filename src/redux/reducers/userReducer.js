import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from '../actions/registerUser'
import { LOG_OUT } from '../actions/logoutUser'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/loginUser'
const initialState = {
  isLoading: false,
  user: null,
  error: null,
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
      return { ...state, isLoading: true, error: null }
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload }
    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    case LOG_OUT:
      return { ...state, user: null }
    default:
      return state
  }
}
