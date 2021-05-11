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
    // box-shadow: #dddddd 0px 0px 0px 3px;
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

const Container = styled.div``;

const Dropdown = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  width: 300px;
  background-color: white;
  position: absolute;
  z-index: 999;
  list-style: none;
  right: 0;
  padding: 5px;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  border: 1px solid #c6c6c6;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`;

const Item = styled.li`
  display: inline-block;
  position: relative;
  line-height: 21px;
  text-align: left;
  border-bottom: 1px solid #dddddd;

  &:hover {
    background-color: #afd1ab;
    font-weight: bold;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
  cursor: pointer;
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

  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);

    // outline: 0;
    // border: none;
  }

  &:active {
    outline: 0;
    border: none;
  }
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
                <Link href="/#/restaurants/new">Create Restaurant</Link>
              </Item>
              <Item>
                <Link href="hi">Favorites</Link>
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
