import React from "react";

import styled from "styled-components";
import ReviewForm from "./ReviewForm";

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
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const Reviews = ({ reviews }) => (
  <StyledReviewsSection>
    <StyledH3>Reviews</StyledH3>
    <ReviewForm />
    {reviews.map((review) => (
      <StyledIndividualReview key={review.id}>
        <StyledUl>
          <li>Rating: {review.rating}</li>
          <li>Body: {review.body}</li>
          <li>Author: {review.author.username}</li>
          <li>Created at: {review.created_at}</li>
        </StyledUl>
      </StyledIndividualReview>
    ))}
  </StyledReviewsSection>
);

export default Reviews;
