import styled from "styled-components";

const LogoutButton = styled.button`
  background-color: rgb(204, 51, 64);
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 400;
  color: white;
  height: 40px;
  outline: none;
  box-shadow: none;
  margin-left: 20px;
  margin-top: -5px;
  max-width: 300px;

  &:hover {
    background-color: #8c232c;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    background-color: #650d14;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    box-shadow: rgb(204 51 64 / 35%) 0px 0px 0px 3px;
  }
`;

export default LogoutButton;
