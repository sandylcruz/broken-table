import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { selectCurrentUserReservations } from "../reducers/selectors";

const H1 = styled.h1`
  font-size: 30px;
`;
const InnerReservationsDiv = styled.div`
  margin: 27px;
`;

const Left = styled.div``;

const ReservationsDiv = styled.div`
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  display: flex;
`;

const ReservationItem = styled.div`
  border: 1px solid #eaeaea;
  list-style: none;
  margin: 10px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px #eaeaea;
  display: flex;
  flex-direction: row;
`;

const Right = styled.div``;

const StyledH1 = styled.h1`
  font-size: 20px;
`;

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border-radius: 5px;
`;

const UserReservations = () => {
  const reservationsArray = useSelector(selectCurrentUserReservations);

  return (
    <ReservationsDiv>
      <InnerReservationsDiv>
        <StyledH1>Upcoming Reservations</StyledH1>
        <ul>
          {reservationsArray.map((reservation) => (
            <ReservationItem key={reservation.id}>
              <Left>
                <StyledImg src={reservation.restaurantPhotoUrl} />
              </Left>
              <Right>
                <li>
                  <H1>{reservation.restaurant.name}</H1>
                </li>
                <li>
                  {reservation.date} for {reservation.timeSlot}
                </li>
                <li>Party of {reservation.partySize}</li>
              </Right>
            </ReservationItem>
          ))}
        </ul>
      </InnerReservationsDiv>
    </ReservationsDiv>
  );
};

export default UserReservations;
