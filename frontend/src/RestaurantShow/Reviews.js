import React from "react";

import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import ReviewForm from "./ReviewForm";

const ReviewContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const CitySpan = styled.span`
  font-weight: normal;
  margin-left: 4px;
`;

const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledH3 = styled.div`
  padding: 5px;
  font-weight: bold;
  font-size: 25px;
`;

const StyledIndividualReview = styled.div`
  border: 1px solid black;
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

const UserInfoDiv = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid purple;
`;

const TopSpan = styled.span`
  margin: 5px;
`;

const Reviews = ({ reviews }) => (
  <StyledReviewsSection>
    <StyledH3>Reviews</StyledH3>
    <ReviewForm />
    {reviews.map((review) => (
      <StyledIndividualReview key={review.id}>
        <ReviewBody>
          <UserInfoDiv>
            <TopSpan>{review.author.username}</TopSpan>
            <CitySpan>San Francisco, CA</CitySpan>
          </UserInfoDiv>
          <ReviewContentDiv>
            <StyledSpan>
              <ReactStars value={review.rating} edit={false} />
            </StyledSpan>
            <StyledSpan>{review.body}</StyledSpan>
          </ReviewContentDiv>
        </ReviewBody>
      </StyledIndividualReview>
    ))}
  </StyledReviewsSection>
);

export default Reviews;
