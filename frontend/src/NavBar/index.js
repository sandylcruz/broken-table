import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import GreetingContainer from "./GreetingContainer";
import Logo from "./Logo.svg";

const NavBarContainer = styled.div`
  border: 1px solid #d3d3d3;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.06);
`;

const StyledGreetingContainer = styled(GreetingContainer)`
  display: flex;
  align-items: right;
`;

const StyledLogo = styled(Logo)`
  padding: 10px;
  margin-top: -20px;
  width: 150px;
`;

const NavBar = React.memo(() => (
  <NavBarContainer>
    <Link to="/">
      <StyledLogo alt="broken-table-logo" />
    </Link>
    <StyledGreetingContainer />
  </NavBarContainer>
));

export default NavBar;
