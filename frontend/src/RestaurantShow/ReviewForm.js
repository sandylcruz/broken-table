import React, { useState } from "react";
import styled from "styled-components";

import { Body, Close, Modal } from "@zendeskgarden/react-modals";
import ReactStars from "react-rating-stars-component";
import SubmitButton from "../components/SubmitButton";

const StyledButtonDiv = styled.div`
  text-align: center;
`;

const ReviewButton = styled.button`
  border-radius: 5px;
  border: 1px solid #f40d15;
  width: 70%;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  background-color: #f40d15;
  font-size: 20px;
  color: white;
  height: 20%;
  outline: none;
  box-shadow: none;

  &:hover {
    background-color: #d10f15;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    background-color: #8f2821;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    box-shadow: #eb7b73 0px 0px 0px 3px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ReviewForm = () => {
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {};

  return (
    <div>
      <ReviewButton type="button" onClick={() => setVisible(true)}>
        <StyledButtonDiv>☆ &nbsp; Write a Review</StyledButtonDiv>
      </ReviewButton>
      {visible && (
        <Modal isLarge onClose={() => setVisible(false)}>
          <Body>
            <StyledForm onSubmit={handleSubmit}>
              <h2>Write a review</h2>
              <span>
                <p>Select your rating</p>
                <ReactStars
                  count={5}
                  onChange={setRating}
                  size={30}
                  activeColor="#ffd700"
                  value={rating}
                />
              </span>

              <span>
                <p>Please provide feedback on your experience</p>
                <textarea
                  rows="4"
                  cols="40"
                  type="text"
                  onChange={setBody}
                  value={body}
                />
              </span>

              <SubmitButton type="submit">Post review</SubmitButton>
            </StyledForm>
          </Body>

          <Close aria-label="Close modal" />
        </Modal>
      )}
    </div>
  );
};

export default ReviewForm;
