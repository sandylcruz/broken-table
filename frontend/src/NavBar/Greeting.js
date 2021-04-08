import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledNavButtons = styled.div``;

const StyledLoginButton = styled.button`
  background-color: white;
  text-decoration: none;
  border: 1px solid red;
  height: 60%;
  border-radius: 10%;
  font-weight: bold;
  color: red;
  margin-top: 20px;
  margin-right: 10px;
`;

const StyledLogoutButton = styled.button`
  background-color: red;
  text-decoration: none;
  border: 1px solid red;
  height: 60%;
  border-radius: 10%;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  margin-right: 10px;
`;

const StyledSignUpButton = styled.button`
  background-color: red;
  text-decoration: none;
  border: 1px solid red;
  height: 60%;
  border-radius: 10%;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  margin-right: 10px;
`;

const Greeting = React.memo(({ currentUser }) => (
  <nav>
    {!currentUser ? (
      <StyledNavButtons>
        <Link to="/signup">
          <StyledSignUpButton>Sign up</StyledSignUpButton>
        </Link>
        <Link to="/login">
          <StyledLoginButton>Log In</StyledLoginButton>
        </Link>
      </StyledNavButtons>
    ) : (
      <div>
        Hi, {currentUser.username}!
        <StyledLogoutButton type="submit">Log Out</StyledLogoutButton>
      </div>
    )}
  </nav>
));

export default Greeting;
