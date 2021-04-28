import React from "react";

import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

import callie from "./callie.png";
import ReviewForm from "./ReviewForm";

const CitySpan = styled.span`
  font-weight: normal;
  margin-left: 4px;
`;

const ResizedImg = styled.img`
  width: 50px;
  height: 50px;
`;

const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH3 = styled.div`
  padding: 5px;
  font-weight: bold;
  font-size: 25px;
`;

const StyledIndividualReview = styled.div`
  list-style-type: none;
  margin: 10px;
  padding: 10px;
`;

const StyledReviewsSection = styled.div`
  border-top: 1px solid #eaeaea;
`;

const StyledSpan = styled.span`
  // margin: 10px;
  padding: 5px;
`;

const TopSpan = styled.span`
  margin: 5px;
`;

const UserInfoDiv = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: left;
  flex-direction: row;
  // border: 1px solid purple;
`;

const UserTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reviews = ({ reviews }) => (
  <StyledReviewsSection>
    <StyledH3>Reviews</StyledH3>
    <ReviewForm />
    {reviews.map((review) => (
      <StyledIndividualReview key={review.id}>
        <ReviewBody>
          <UserInfoDiv>
            <ResizedImg src={callie} />
            <UserTextDiv>
              <TopSpan>{review.author.username}</TopSpan>
              <CitySpan>San Francisco, CA</CitySpan>
            </UserTextDiv>
          </UserInfoDiv>
          <ReviewContentDiv>
            <StyledSpan>
              <ReactStars
                value={review.rating}
                size={24}
                activeColor="#ffd700"
              />
            </StyledSpan>
            <StyledSpan>{review.body}</StyledSpan>
          </ReviewContentDiv>
        </ReviewBody>
      </StyledIndividualReview>
    ))}
  </StyledReviewsSection>
);

export default Reviews;
