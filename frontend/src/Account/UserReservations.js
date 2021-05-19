import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Event from "./Event.svg";
import Party from "./Party.svg";
import { selectCurrentUserReservations } from "../reducers/selectors";

const DateLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin: 5px;
`;

const InnerReservationsDiv = styled.div`
  margin: 27px;
`;

const Left = styled.div``;

const PartyLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReservationsDiv = styled.div`
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  display: flex;
`;

const ReservationItem = styled.div`
  border: 1px solid #eaeaea;
  list-style: none;
  margin: 5px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  width: 560px;
  height: 130px;
  margin-left: -1px;
  cursor: pointer;


  &:hover {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.04);

  border: 1px solid #bababa;
  transition: border-color 0.3s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s,
    background-color 0.25s ease-in-out 0s, color 0.15s ease-in-out 0s;
  }

  .20s ease-out,color .25s ease-out,opacity .25s ease-out,box-shadow .15s ease-out
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  justify-content: space-around;
`;

const StyledEvent = styled(Event)`
  margin: 5px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border-radius: 5px;
`;

const StyledParty = styled(Party)`
  margin: 5px;
`;

const UserReservations = () => {
  const reservationsArray = useSelector(selectCurrentUserReservations);

  return (
    <ReservationsDiv>
      <InnerReservationsDiv>
        <StyledH1>Upcoming Reservations</StyledH1>
        {reservationsArray.map((reservation) => (
          <ReservationItem key={reservation.id}>
            <Left>
              <StyledImg src={reservation.restaurant.photoUrl} />
            </Left>
            <Right>
              <li>
                <H1>{reservation.restaurant.name}</H1>
              </li>
              <li>
                <DateLine>
                  <StyledEvent /> {reservation.date} for {reservation.timeSlot}
                </DateLine>
              </li>
              <li>
                <PartyLine>
                  <StyledParty /> Party of {reservation.partySize}
                </PartyLine>
              </li>
            </Right>
          </ReservationItem>
        ))}
      </InnerReservationsDiv>
    </ReservationsDiv>
  );
};

export default UserReservations;
