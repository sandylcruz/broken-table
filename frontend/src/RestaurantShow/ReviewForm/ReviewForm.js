import React, { useState } from "react";
import styled from "styled-components";

import ReactStars from "react-rating-stars-component";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    console.log("hi");
  };

  return (
    <div>
      <h4>Review Form: Leave a review </h4>

      <StyledForm onSubmit={handleSubmit}>
        <span>
          <p>How likely are you to recommend this restaurant to others?</p>
          <ReactStars
            count={5}
            onChange={setRating}
            size={40}
            activeColor="#ffd700"
            value={rating}
          />
        </span>

        <span>
          <p>Please provide feedback on your experience</p>
          <textarea rows="4" cols="40" type="text" placeholder=".." />
        </span>
      </StyledForm>
    </div>
  );
};

export default ReviewForm;
