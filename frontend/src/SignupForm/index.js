import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectErrors } from "../reducers/selectors";
import SignupForm from "./SignupForm";
import { signUp } from "../actions/sessionActions";

const SignupFormContainer = React.memo((props) => {
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  const processForm = useCallback(
    (user) => {
      dispatch(signUp(user));
    },
    [dispatch]
  );

  return (
    <SignupForm
      {...props}
      errors={errors}
      formType={signUp}
      processForm={processForm}
    />
  );
});

export default SignupFormContainer;
