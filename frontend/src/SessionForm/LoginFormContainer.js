import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectErrors } from "../reducers/selectors";
import { login } from "../actions/sessionActions";
import LoginForm from "./LoginForm";

const LoginFormContainer = React.memo((props) => {
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  const processForm = useCallback((user) => dispatch(login(user)), [dispatch]);

  return (
    <LoginForm
      {...props}
      errors={errors}
      formType={login}
      processForm={processForm}
    />
  );
});

export default LoginFormContainer;
