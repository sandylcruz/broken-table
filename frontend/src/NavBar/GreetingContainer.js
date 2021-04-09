import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Greeting from "./Greeting";
import { logout as logoutAction } from "../actions/sessionActions";
import { selectCurrentUser } from "../reducers/selectors";

const GreetingContainer = (props) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);

  return <Greeting {...props} currentUser={currentUser} logout={logout} />;
};

export default GreetingContainer;
