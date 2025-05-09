export const LOAD_USER_FROM_STORAGE = 'LOAD_USER_FROM_STORAGE'

export const loadUserFromStorage = () => {
  return (dispatch) => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      dispatch({ type: LOAD_USER_FROM_STORAGE, payload: user })
    }
  }
}
