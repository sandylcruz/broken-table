/* eslint-disable camelcase */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";

import ReactStars from "react-rating-stars-component";
import { Body, Close, Modal } from "@zendeskgarden/react-modals";
import { createReview } from "../actions/reviewActions";
import { selectCurrentUser } from "../reducers/selectors";

import SubmitButton from "../components/SubmitButton";

const ReviewButton = styled.button`
  border-radius: 5px;
  border: 1px solid #f40d15;
  width: 200px;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  background-color: #f40d15;
  font-size: 18px;
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
const StyledButtonDiv = styled.div`
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ReviewForm = React.memo(() => {
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(0);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const userId = currentUser.id;
  const queryParams = useParams();
  const restaurantId = parseInt(queryParams.id, 10);

  const processForm = useCallback((review) => dispatch(createReview(review)), [
    dispatch,
  ]);

  const updateBody = useCallback((event) => {
    setBody(event.currentTarget.value);
  }, []);

  const updateRating = useCallback((event) => {
    setRating(event);
  }, []);

  const isUnmountedRef = useRef(false);

  useEffect(
    () => () => {
      isUnmountedRef.current = true;
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const review = { body, rating, userId, restaurantId };

      processForm(review).then(() => {
        if (isUnmountedRef.current) return;

        setVisible(false);
      });
    },
    [body, rating, userId, restaurantId]
  );

  const handleClick = useCallback(() => setVisible(true), []);
  const closeModal = useCallback(() => setVisible(false), []);

  return (
    <div>
      <ReviewButton type="button" onClick={handleClick}>
        <StyledButtonDiv>☆ Write a Review</StyledButtonDiv>
      </ReviewButton>
      {visible && (
        <Modal isLarge onClose={closeModal}>
          <Body>
            <StyledForm onSubmit={handleSubmit}>
              <h2>Write a review</h2>
              <span>
                <p>Select your rating</p>
                <ReactStars
                  count={5}
                  onChange={updateRating}
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
                  onChange={updateBody}
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
});

export default ReviewForm;
