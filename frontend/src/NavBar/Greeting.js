import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
// import LogoutButton from "../components/LogoutButton";

const DropdownContentA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

const DropdownContentDiv = styled.div`
  display: none;
  position: absolute;
  background-color: pink;
  // background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledAvatarInput = styled.input`
  height: 50px;
  width: 50px;
  border-radius: 50%;

  &:hover {
    box-shadow: #c6c6c6 0px 0px 0px 4px;
    transition: border-color 0.35s ease-in-out 0s,
      box-shadow 0.2s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    box-shadow: #adadad 0px 0px 0px 5px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    box-shadow: #a0a0a0 0px 0px 0px 6px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
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
          <DropdownDiv>
            <StyledAvatarInput
              type="image"
              src={currentUser.photoUrl}
              alt="user-photo"
            />
            <DropdownContentDiv>
              <DropdownContentA href="#">Create a Restaurant</DropdownContentA>
              <DropdownContentA href="#" onClick={logout}>
                Logout
              </DropdownContentA>
            </DropdownContentDiv>

            {/* <GreetingText>Hi, {currentUser.username}!</GreetingText> */}
            {/* <LogoutButton type="submit" onClick={logout}> */}
            {/* Log Out
            </LogoutButton> */}
          </DropdownDiv>
        </div>
      )}
    </StyledNav>
  );
});

export default Greeting;
