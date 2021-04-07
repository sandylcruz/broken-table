import React from "react";

import styled from "styled-components";

const StyledNavButtons = styled.div``;

const StyledLoginButton = styled.button`
  background-color: white;
  text-decoration: none;
  border: 1px solid red;
  height: 50%;
  border-radius: 10%;
  font-weight: bold;
  color: red;
  margin-top: 20px;
  margin-right: 10px;
`;

const StyledSignUpButton = styled.button`
  background-color: red;
  text-decoration: none;
  border: 1px solid red;
  height: 50%;
  border-radius: 10%;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  margin-right: 10px;
`;

const Greeting = React.memo(() => (
  <StyledNavButtons>
    <StyledSignUpButton type="submit">Sign up</StyledSignUpButton>
    <StyledLoginButton type="submit">Log In</StyledLoginButton>
  </StyledNavButtons>
));

export default Greeting;
