import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin-top: 77px;
`;
const NotFound = React.memo(() => (
  <WrapperDiv>
    <h1>Not found</h1>
  </WrapperDiv>
));

export default NotFound;
