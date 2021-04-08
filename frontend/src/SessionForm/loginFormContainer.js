import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../actions/sessionActions";
import SessionForm from "./SessionForm";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  const processForm = useCallback((user) => {
    dispatch(login(user));
  });

  return (
    <div>
      <SessionForm
        {...props}
        errors={errors}
        formType={login}
        processForm={processForm}
      />
    </div>
  );
};

export default LoginForm;
