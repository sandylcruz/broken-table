import styled from "styled-components";

const SubmitButton = styled.button`
  border-radius: 25px;
  border: 1px solid #d3d3d3;
  width: 70%;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  background-color: #2a2ae9;
  color: white;
  height: 40px;
  outline: none;
  box-shadow: none;

  &:hover {
    background-color: #2525c7;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    background-color: #1d1d99;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    box-shadow: #a3c0f3 0px 0px 0px 3px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

export default SubmitButton;
