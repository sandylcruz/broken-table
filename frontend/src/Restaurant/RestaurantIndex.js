import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Star from "../RestaurantShow/svgs/Star.svg";

const LeftDiv = styled.div``;

const RatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: #f0adb0;
`;

const RestaurantItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  margin: 0 0 10px;
  margin-bottom: 15px;
  padding: 10px;
  width: 350px;
  height: 130px;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.04);

    border: 1px solid #bababa;
    transition: border-color 0.3s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s, color 0.15s ease-in-out 0s;
  }

  .20s ease-out,color .25s ease-out,opacity .25s ease-out,box-shadow .15s ease-out
`;

const RatingTextDiv = styled.div`
  display: flex;
  color: red;
  // background-color: #b696c7;
`;

// const RestaurantShortBody = styled.div`

// `;

const RightDiv = styled.div``;

const RestaurantContainer = styled.div`
  width: 400px;
  margin: 40px;
  padding-top: 70px;
`;

const RestaurantInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: #d0e1f5;
`;

const StyledH3 = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 5px;
`;

const StyledLocationSpan = styled.span`
  margin: 0;
  padding: 0;
  color: #737373;
  font-size: 14px;
  // background-color: #c6e2d1;
`;

const StyledStar = styled(Star)`
  transform: scale(0.75);
  fill: red;
  margin-bottom: 10px;
`;

const RestaurantIndex = React.memo(({ restaurants }) => (
  <RestaurantContainer>
    {restaurants.map((restaurant) => (
      <Link to={`restaurants/${restaurant.id}`} key={restaurant.id}>
        <RestaurantItem key={restaurant.id}>
          <RestaurantInfoDiv>
            <LeftDiv>
              <StyledImg src={restaurant.photoUrl} alt={restaurant.name} />
            </LeftDiv>

            <RightDiv>
              <StyledH3>{restaurant.name}</StyledH3>
              <RatingDiv>
                <StyledStar />
                <RatingTextDiv>
                  {restaurant.averageRating || "No reviews yet"}
                </RatingTextDiv>
              </RatingDiv>
              <StyledLocationSpan>📍{restaurant.location}</StyledLocationSpan>
              {/* <RestaurantShortBody>{restaurant.description}</RestaurantShortBody> */}
            </RightDiv>
          </RestaurantInfoDiv>
        </RestaurantItem>
      </Link>
    ))}
  </RestaurantContainer>
));

export default RestaurantIndex;
