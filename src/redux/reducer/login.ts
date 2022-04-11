export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const onHandleLogin = () => ({ type: LOGIN })
export const onHandleLogout = () => ({ type: LOGOUT })

type LoginAction = ReturnType<typeof onHandleLogin> | ReturnType<typeof onHandleLogout>

const initialState = {
    isLogin: false
}

const login = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true
      }
    case LOGOUT:
      return {
        isLogin: false
      }
    default:
      return state
  }
}

export default login