import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Cancel from "./Cancel.svg";
import { cancelReservation } from "../actions/reservationActions";
import Event from "./Event.svg";
import Party from "./Party.svg";
import { selectCurrentUserReservations } from "../reducers/selectors";

const CancelButton = styled.button`
  background-color: pink;
`;

const DateLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  background-color: purple;
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

const StyledCancelX = styled(Cancel)``;

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
  const dispatch = useDispatch();
  const reservationsArray = useSelector(selectCurrentUserReservations);

  const handleReservationClick = useCallback((reservation) => {
    dispatch(cancelReservation(reservation.id));
  }, []);

  return (
    <ReservationsDiv>
      <InnerReservationsDiv>
        <StyledH1>Upcoming Reservations</StyledH1>

        {reservationsArray.map((reservation) => (
          <ul key={reservation.restaurant.id}>
            <Link
              to={`/restaurants/${reservation.restaurant.id}`}
              key={reservation.restaurant.id}
            >
              <ReservationItem key={reservation.id}>
                <Left>
                  <StyledImg src={reservation.restaurant.photoUrl} />
                </Left>

                <Right>
                  <FirstLine>
                    <H1>{reservation.restaurant.name}</H1>
                    <CancelButton
                      type="button"
                      onClick={handleReservationClick}
                    >
                      <StyledCancelX />
                    </CancelButton>
                  </FirstLine>

                  <DateLine>
                    <StyledEvent /> {reservation.date} for{" "}
                    {reservation.timeSlot}
                  </DateLine>

                  <PartyLine>
                    <StyledParty /> Party of {reservation.partySize}
                  </PartyLine>
                </Right>
              </ReservationItem>
            </Link>
          </ul>
        ))}
      </InnerReservationsDiv>
    </ReservationsDiv>
  );
};

export default UserReservations;
