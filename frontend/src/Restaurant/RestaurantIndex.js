import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Star from "../RestaurantShow/svgs/Star.svg";

const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
`;

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
  width: 560px;
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
`;

const RestaurantShortBody = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 400px;
  color: gray;
  font-size: 14px;
  margin: 5px;
`;

const RightDiv = styled.div``;

const RestaurantContainer = styled.div`
  margin: 40px;
  padding-top: 70px;
`;

const RestaurantInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledH3 = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border-radius: 5px;
`;

const StyledLocationSpan = styled.span`
  margin: 0;
  padding: 0;
  color: #737373;
  font-size: 14px;
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
              <RestaurantShortBody>
                {restaurant.description}
              </RestaurantShortBody>
            </RightDiv>
          </RestaurantInfoDiv>
        </RestaurantItem>
      </Link>
    ))}
  </RestaurantContainer>
));

export default RestaurantIndex;
