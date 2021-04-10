import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const GreetingText = styled.p`
  font-size: 15px;
  font-family: helvetica;
  margin: 10px;
`;

const Greeting = React.memo(({ currentUser, logout }) => {
  const history = useHistory();

  const handleSignupClick = useCallback(() => {
    history.push("/signup");
  }, [history]);

  const handleLoginClick = useCallback(() => {
    history.push("/login");
  }, [history]);

  return (
    <nav>
      {!currentUser ? (
        <div>
          <PrimaryButton onClick={handleSignupClick}>Sign up</PrimaryButton>
          <SecondaryButton onClick={handleLoginClick}>Log In</SecondaryButton>
        </div>
      ) : (
        <div>
          <GreetingText>Hi, {currentUser.username}!</GreetingText>
          <PrimaryButton type="submit" onClick={logout}>
            Log Out
          </PrimaryButton>
        </div>
      )}
    </nav>
  );
});

export default Greeting;
