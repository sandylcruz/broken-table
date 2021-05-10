import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import LogoutButton from "../components/LogoutButton";

const GreetingAndLogoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  margin-right: 20px;
`;

const GreetingText = styled.p`
  font-size: 15px;
  font-family: helvetica;
  margin-top: 5px;
`;

const StyledAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
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
    <StyledNav>
      {!currentUser ? (
        <div>
          <PrimaryButton onClick={handleSignupClick}>Sign up</PrimaryButton>
          <SecondaryButton onClick={handleLoginClick}>Log In</SecondaryButton>
        </div>
      ) : (
        <div>
          <GreetingAndLogoutDiv>
            <StyledAvatar src={currentUser.photoUrl} alt="" />
            <GreetingText>Hi, {currentUser.username}!</GreetingText>
            <LogoutButton type="submit" onClick={logout}>
              Log Out
            </LogoutButton>
          </GreetingAndLogoutDiv>
        </div>
      )}
    </StyledNav>
  );
});

export default Greeting;
