export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'

export function registerUser(userData) {
  return async function (dispatch) {
    dispatch({ type: REGISTER_USER_REQUEST })

    try {
      const response = await fetch(
        'https://blog-platform.kata.academy/api/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: userData }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw data
      }

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
    } catch (error) {
      const errorMsg = error.response?.data?.errors
        ? Object.values(error.response.data.errors)[0]
        : 'Registration failed'

      dispatch({ type: REGISTER_USER_FAILURE, payload: errorMsg })
    }
  }
}
