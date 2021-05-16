import React, { useCallback } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout as logoutAction } from "../actions/sessionActions";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.li`
  display: inline-block;
  position: relative;
  text-align: left;
  width: 300px;
`;

const LeftDiv = styled.div`
  margin-top: 85px;
  border: 1px solid pink;
  width: 33%;
`;

const RightDiv = styled.div`
  margin-top: 85px;
  border: 1px solid green;
  width: 66%;
`;

const SignOutButton = styled.button`
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

const StyledH1 = styled.h1`
  font-size: 40;
`;
const AccountSummary = () => {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(logoutAction()), [dispatch]);

  return (
    <AccountContainer>
      <LeftDiv>
        <h1>In Left Div</h1>
        <Item>
          {" "}
          <SignOutButton onClick={logout}>SIGN OUT</SignOutButton>
        </Item>
      </LeftDiv>
      <RightDiv>
        <StyledH1>In Right Div</StyledH1>
      </RightDiv>
    </AccountContainer>
  );
};

export default AccountSummary;
