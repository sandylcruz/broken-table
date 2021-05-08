import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
// import LogoutButton from "../components/LogoutButton";

const AvatarImg = styled.img`
  height: 50px;
  width: 50px;
  border: 3px solid #dddddd;
  border-radius: 50%;

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

const DropdownLi = styled.li`
  display: inline-block;
  position: relative;
  line-height: 21px;
  text-align: left;
`;

const DropdownUl = styled.ul`
  // display: none;
  min-width: 200px;
  position: absolute;
  z-index: 999;
  list-style: none;
  background-color: pink;
  right: 0;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: purple;
  }
`;

const Li = styled.li`
  display: inline-block;
  position: relative;
  line-height: 21px;
  text-align: left;
`;

const UlLiA = styled.a`
  display: block;
  padding: 8px 25px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: red;
    background: #939393;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  background-color: green;
`;

const DropdownLiA = styled.a`
  display: block;
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
          <Ul>
            <Li>
              <UlLiA href="#">
                {" "}
                <AvatarImg src={currentUser.photoUrl} />
              </UlLiA>

              <DropdownUl>
                <DropdownLi>
                  <DropdownLiA href="#">Create Resturant</DropdownLiA>
                </DropdownLi>
                <DropdownLi>
                  <DropdownLiA href="#">Favorites</DropdownLiA>
                </DropdownLi>
                <DropdownLi>
                  <DropdownLiA href={logout}>Log out</DropdownLiA>
                </DropdownLi>
              </DropdownUl>
            </Li>
          </Ul>
          {/* <Ul>
            <UlLi>
              <UlLiA href="#">Picture ▾</UlLiA>
              <DropdownUl>
                <DropdownLi>
                  <DropdownLiA href="#">Make a restaurant</DropdownLiA>
                </DropdownLi>
                <DropdownLi>
                  <DropdownLiA href="#">Logout</DropdownLiA>
                </DropdownLi>
              </DropdownUl>
            </UlLi>
          </Ul> */}
        </div>

        // <div>
        //   <DropdownDiv>
        //     <DropdownButton type="submit">
        //       <AvatarImg src={currentUser.photoUrl} />
        //     </DropdownButton>

        //     <DropdownContentDiv>
        //       <DropdownContentA href="#">Create a Restaurant</DropdownContentA>
        //       <DropdownContentA href="#" onClick={logout}>
        //         Logout
        //       </DropdownContentA>
        //     </DropdownContentDiv>
        //   </DropdownDiv>
        // </div>
      )}
    </StyledNav>
  );
});

export default Greeting;
