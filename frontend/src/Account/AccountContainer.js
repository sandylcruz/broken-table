import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import styled from "styled-components";
import NotFound from "../NotFound";
import { ProtectedRoute } from "../util/routeUtil";
import UserFavorites from "./UserFavorites";
import UserReservations from "./UserReservations";

const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const Divider = styled.li`
  border-top: 1px solid #eaeaea;
  // padding: 10px;
  list-style: none;
  width: 50%;
`;

const InnerAccountContainer = styled.div`
  display: flex;
  flex: 1;
  margin-top: 77px;
`;

const Item = styled.li`
  text-decoration: none;
  color: #2a2a2a;
  padding: 20px 0;
  font-family: arial narrow;
  font-size: 14px;
  display: block;
  background-color: white;
  cursor: pointer;
  // margin: 15px;
  align-items: left;
  padding:

  &:hover {
    color: red;
  }
`;

const Sidebar = styled.div`
  margin-left: 30px;
  min-width: 25%;
  border-right: 1px solid #eaeaea;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  padding: 10px 15px;
  font-family: arial narrow;
  font-size: 14px;
  display: block;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const AccountSummary = () => (
  <AccountContainer>
    <InnerAccountContainer>
      <Sidebar>
        <Item>
          <StyledLink to="/restaurants/new">CREATE RESTAURANT</StyledLink>
        </Item>
        <Divider />
        <Item>
          <StyledLink to="/account/favorites">FAVORITES</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/account/reservations">RESERVATIONS</StyledLink>
        </Item>
      </Sidebar>
      <Switch>
        <ProtectedRoute
          exact
          path="/account/favorites"
          component={UserFavorites}
        />
        <ProtectedRoute
          exact
          path="/account/reservations"
          component={UserReservations}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </InnerAccountContainer>
  </AccountContainer>
);

export default AccountSummary;
