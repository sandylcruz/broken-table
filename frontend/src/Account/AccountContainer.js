import React, { useCallback } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../actions/sessionActions";
import UserFavorites from "./UserFavorites";
import UserReservations from "./UserReservations";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Item = styled.li`
  text-decoration: none;
  color: #2a2a2a;
  padding: 20px 0;
  margin-top: 50px;
  font-family: arial narrow;
  font-size: 14px;
  display: block;
  border-bottom: 1px solid #eaeaea;
  background-color: white;
  cursor: pointer;
  margin: 15px;
  align-items: left;
  padding:

  &:hover {
    color: red;
  }
`;

const LeftDiv = styled.div`
  margin-top: 110px;
  margin-left: 30px;
  min-width: 33%;
  border-right: 1px solid #eaeaea;
`;

const RightDiv = styled.div`
  margin-top: 70px;
  background-color: #fafafa;
  width: 66%;
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
    color: #ff462d;
  }
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-top: 60px;
`;
const AccountSummary = () => {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);

  return (
    <AccountContainer>
      <LeftDiv>
        <Item>
          {" "}
          <Button onClick={UserFavorites}>FAVORITES</Button>
        </Item>
        <Item>
          {" "}
          <Button onClick={UserReservations}>RESERVATIONS</Button>
        </Item>
        <Item>
          {" "}
          <Button onClick={logout}>SIGN OUT</Button>
        </Item>
      </LeftDiv>
      <RightDiv>
        <StyledH1>My Favorites</StyledH1>
      </RightDiv>
    </AccountContainer>
  );
};

export default AccountSummary;
