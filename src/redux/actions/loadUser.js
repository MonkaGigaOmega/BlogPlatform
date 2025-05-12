export const LOAD_USER_FROM_STORAGE = 'LOAD_USER_FROM_STORAGE'

export const loadUserFromStorage = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token') // Проверяем токен
    const user = localStorage.getItem('user') // Проверяем пользователя

    console.log('Token from storage:', token)
    console.log('User from storage:', user)

    if (!token || !user) {
      // Если нет токена или пользователя, ничего не делаем
      return
    }

    try {
      const res = await fetch('https://blog-platform.kata.academy/api/user', {
        headers: {
          Authorization: `Token ${token}`, // Передаем токен в заголовке
        },
      })

      const data = await res.json()

      if (!res.ok) {
        throw data
      }

      dispatch({ type: LOAD_USER_FROM_STORAGE, payload: data.user })
    } catch (error) {
      console.error('Ошибка при загрузке пользователя:', error)
    }
  }
}
