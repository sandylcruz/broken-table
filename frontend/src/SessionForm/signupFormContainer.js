import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SessionForm from "./SessionForm";
import { signUp } from "../actions/sessionActions";

const SignupForm = (props) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  const processForm = useCallback(
    (user) => {
      dispatch(signUp(user));
    },
    [dispatch]
  );

  return (
    <div>
      <SessionForm
        {...props}
        errors={errors}
        formType={signUp}
        processForm={processForm}
      />
    </div>
  );
};

export default SignupForm;
