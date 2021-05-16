import React from "react";
import styled from "styled-components";

const ReservationsDiv = styled.div`
  background-color: #eaeaea;
  height: 100%;
  width: 100%;
  display: flex;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const UserReservations = () => {
  let reservations;
  console.log(reservations);

  return (
    <ReservationsDiv>
      <StyledH1>Upcoming Reservations</StyledH1>
    </ReservationsDiv>
  );
};

export default UserReservations;
