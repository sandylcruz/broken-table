import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import Greeting from "./Greeting";
import { logout as logoutAction } from "../actions/sessionActions";

// const GreetingContainer = React.memo((props) => {
//   const currentUser = useSelector(selectCurrentUser);
//   const dispatch = useDispatch();

//   return <Greeting {...props} />;
// }

const GreetingContainer = (props) => {
  const currentUser = "user";
  const dispatch = useDispatch();

  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);

  return <Greeting {...props} currentUser={currentUser} logout={logout} />;
};

export default GreetingContainer;
