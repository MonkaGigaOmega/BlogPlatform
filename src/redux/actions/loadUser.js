export const LOAD_USER_FROM_STORAGE = 'LOAD_USER_FROM_STORAGE'

export const loadUserFromStorage = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const res = await fetch('https://blog-platform.kata.academy/api/user', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw data
      }

      dispatch({ type: LOAD_USER_FROM_STORAGE, payload: data.user })
      localStorage.setItem('user', JSON.stringify(data.user))
    } catch (error) {
      console.error('Ошибка при загрузке пользователя:', error)
    }
  }
}
