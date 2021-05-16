import React, { useCallback, useEffect, useRef, useState } from "react";
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
  cursor: pointer;

  &:hover {
    box-shadow: #dddddd 0px 0px 0px 4px;
    transition: border-color 0.35s ease-in-out 0s,
    box-shadow 0.2s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
    color 0.25s ease-in-out 0s;
  }

  &:active {
    box-shadow: #c6c6c6 0px 0px 0px 3px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.2s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    border: 1px solid #adadad
    box-shadow: #adadad 0px 0px 0px 3px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.2s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

const Button = styled.button`
  text-decoration: none;
  color: #333333;
  padding: 10px 15px;
  font-family: arial narrow;
  font-size: 15px;
  display: block;
  border: 0;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Container = styled.div``;

const Divider = styled.li`
  border-top: 1px solid #eaeaea;
  margin: 15px 0;
`;

const Dropdown = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  width: 250px;
  background-color: white;
  position: absolute;
  z-index: 999;
  list-style: none;
  right: 0;
  padding: 5px;
  margin: 10px;
  border-bottom: 1px solid #c6c6c6;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  transition-duration: 4s;
  transition-delay: 2s;
`;

const Item = styled.li`
  display: inline-block;
  position: relative;
  text-align: left;
  width: 300px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333333;
  padding: 10px 15px;
  font-family: arial narrow;
  font-size: 15px;
  display: block;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const MenuTrigger = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  border: none;
  vertical-align: middle;
  margin-left: auto;
  margin-right: 10px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const Greeting = React.memo(({ currentUser, logout }) => {
  const history = useHistory();
  const dropdownMenuRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive((previousIsActive) => !previousIsActive);

  const handleSignupClick = useCallback(() => {
    history.push("/signup");
  }, [history]);

  const handleLoginClick = useCallback(() => {
    history.push("/login");
  }, [history]);

  useEffect(() => {
    if (!isActive) {
      return () => {};
    }

    const handleClick = (e) => {
      const { target } = e;
      if (!dropdownMenuRef.current.contains(target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      // on unmount this is called. is cleanup function
      document.removeEventListener("click", handleClick);
    };
  }, [isActive]);

  return (
    <StyledNav>
      {!currentUser ? (
        <div>
          <PrimaryButton onClick={handleSignupClick}>Sign up</PrimaryButton>
          <SecondaryButton onClick={handleLoginClick}>Log In</SecondaryButton>
        </div>
      ) : (
        <Container>
          <MenuTrigger type="button" onClick={onClick}>
            <AvatarImg src={currentUser.photoUrl} />
          </MenuTrigger>

          <Dropdown isActive={isActive} ref={dropdownMenuRef}>
            <Ul>
              <Item>
                <Link href="/#/account">ACCOUNT</Link>
              </Item>
              <Item>
                <Link href="/#/restaurants/new">CREATE RESTAURANT</Link>
              </Item>
              <Item>
                <Link href="/#/account/reservations">RESERVATIONS</Link>
              </Item>
              <Item>
                <Link href="/#/account/favorites">FAVORITES</Link>
              </Item>

              <Divider />
              <Item>
                <Button onClick={logout}>SIGN OUT</Button>
              </Item>
            </Ul>
          </Dropdown>
        </Container>
      )}
    </StyledNav>
  );
});

export default Greeting;
