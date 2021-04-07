import * as SessionAPIUtil from "../util/sessionApiUtil";

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const login = (user) => (dispatch) =>
  SessionAPIUtil.login(user).then((currentUser) =>
    dispatch(receiveCurrentUser(currentUser))
  );

export const signUp = (user) => (dispatch) =>
  SessionAPIUtil.signUp(user).then((currentUser) =>
    dispatch(receiveCurrentUser(currentUser))
  );

export const logout = () => (dispatch) =>
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));
