import React from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

import ReviewForm from "./ReviewForm";

const CitySpan = styled.span`
  font-weight: normal;
  margin-left: 4px;
`;

const ResizedImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border-bottom: 1px solid #eaeaea;
`;

const ReviewContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIndividualReview = styled.div`
  list-style-type: none;
  margin: 10px;
  padding: 10px;
`;

const StyledReviewsSection = styled.div``;

const StyledSpan = styled.span`
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
`;

const UserTextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Reviews = React.memo(({ reviews }) => (
  <StyledReviewsSection>
    <ReviewForm />
    {reviews.map((review) => (
      <StyledIndividualReview key={review.id}>
        <ReviewBody>
          <UserInfoDiv>
            <ResizedImg src={review.author.photoUrl} />
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
                edit={false}
              />
            </StyledSpan>
            <StyledSpan>{review.body}</StyledSpan>
          </ReviewContentDiv>
        </ReviewBody>
      </StyledIndividualReview>
    ))}
  </StyledReviewsSection>
));

export default Reviews;
