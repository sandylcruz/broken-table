import styled from "styled-components";

const SecondaryButton = styled.button`
  background-color: white;
  text-decoration: none;
  border: 1px solid rgb(204, 51, 64);
  height: 60%;
  border-radius: 10%;
  font-weight: bold;
  margin-top: 20px;
  margin-right: 10px;
  height: 40px;
  outline: none;
  box-shadow: none;
  color: rgb(204, 51, 64);

  &:hover {
    border-color: rgb(140, 35, 44);
    background-color: rgba(204, 51, 64, 0.08);
    color: rgb(140, 35, 44);
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    border-color: rgb(104, 18, 25);
    background-color: rgba(204, 51, 64, 0.2);
    color: rgb(104, 18, 25);
    transition: border-color 0.1s ease-in-out 0s,
      background-color 0.1s ease-in-out 0s, color 0.1s ease-in-out 0s;
  }

  &:focus {
    box-shadow: rgb(204 51 64 / 35%) 0px 0px 0px 3px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

export default SecondaryButton;
