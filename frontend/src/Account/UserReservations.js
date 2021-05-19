import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { selectCurrentUserReservations } from "../reducers/selectors";

const InnerReservationsDiv = styled.div`
  margin: 27px;
`;

const ReservationsDiv = styled.div`
  background-color: #eaeaea;
  height: 100%;
  width: 100%;
  display: flex;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const UserReservations = React.memo(() => (
  <ReservationsDiv>
    <InnerReservationsDiv>
      <StyledH1>Upcoming Reservations</StyledH1>
    </InnerReservationsDiv>
  </ReservationsDiv>
));

export default UserReservations;
