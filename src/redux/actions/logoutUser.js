export const LOG_OUT = 'LOG_OUT'

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT_USER' })
  }
}
