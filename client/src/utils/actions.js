export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// Action creators for user authentication
export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  payload: { token, user },
});

export const logout = () => ({
  type: LOGOUT,
});

// Action creators for user management
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
