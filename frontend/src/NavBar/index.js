import React from "react";
import styled from "styled-components";

import GreetingContainer from "./GreetingContainer";
import Logo from "./Logo.svg";

const NavBarContainer = styled.div`
  border: 1px dotted black;
  height: 75px;
  display: flex;
  flex-direction: row;
`;

const StyledLogo = styled(Logo)`
  padding: 10px;
  margin-top: -20px;
  width: 150px;
`;

const NavBar = React.memo(() => (
  <NavBarContainer>
    <StyledLogo />
    <GreetingContainer />
  </NavBarContainer>
));

export default NavBar;
