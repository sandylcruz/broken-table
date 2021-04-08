import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../actions/sessionActions";
import LoginForm from "./LoginForm";

const LoginFormContainer = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  const processForm = useCallback((user) => dispatch(login(user)), [dispatch]);

  return (
    <div>
      <LoginForm
        {...props}
        errors={errors}
        formType={login}
        processForm={processForm}
      />
    </div>
  );
};

export default LoginFormContainer;
