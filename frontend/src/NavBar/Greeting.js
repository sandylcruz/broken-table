import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const AvatarImg = styled.img`
  height: 50px;
  width: 50px;
  border: 3px solid #dddddd;
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);


  &:hover {
    box-shadow: #dddddd 0px 0px 0px 2px;
    transition: border-color 0.35s ease-in-out 0s,
      box-shadow 0.2s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    box-shadow: #c6c6c6 0px 0px 0px 2px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    border: 1px solid #adadad
    box-shadow: #adadad 0px 0px 0px 2px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

const Container = styled.div``;

const Dropdown = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  min-width: 200px;
  position: absolute;
  z-index: 999;
  list-style: none;
  background-color: #f7c1c8; //pink
  right: 0;
  // display: flex;
  // flex-direction: column;
  // padding: 5px;
`;

const Item = styled.li`
  display: inline-block;
  position: relative;
  line-height: 21px;
  text-align: left;
  background-color: #b2bde2; //purple

  &:hover {
    background-color: #afd1ab;
  }
`;

const Link = styled.a`
  display: block;
`;

const MenuTrigger = styled.button`
  display: block;
  padding: 8px 25px;
  text-decoration: none;
  background-color: #afd1ab; //green
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #b7dbdd; //blue
  }

  &:active {
    background-color: #f6ddbb; //tan
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  background-color: #afd1ab; //green
  display: flex;
  flex-direction: column;
`;

const Greeting = React.memo(({ currentUser, logout }) => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive((previousIsActive) => !previousIsActive);

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
        <Container>
          <MenuTrigger onClick={onClick} type="button">
            <AvatarImg src={currentUser.photoUrl} />
          </MenuTrigger>

          <Dropdown isActive={isActive}>
            <Ul>
              <Item>
                <Link href="http://google.com">Create Resturant</Link>
              </Item>
              <Item>
                <Link href="http:/google.com">Favorites</Link>
              </Item>
              <Item>
                <Link href={logout}>Log out</Link>
              </Item>
            </Ul>
          </Dropdown>
        </Container>
      )}
    </StyledNav>
  );
});

export default Greeting;
