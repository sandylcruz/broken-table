import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { selectCurrentUser } from "../reducers/selectors";

const Auth = React.memo(({ component: Component, path, exact }) => {
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
});

export const AuthRoute = Auth;

export const ProtectedRoute = Auth;
