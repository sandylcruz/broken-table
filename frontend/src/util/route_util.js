import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { Redirect, Route } from "react-router-dom";

import { selectCurrentUser } from "../reducers/selectors";

const Auth = ({ component: Component, path, exact }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        !currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const AuthRoute = withRouter(Auth);

export default AuthRoute;
