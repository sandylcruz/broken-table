import React from "react";

import styled from "styled-components";

// const Item = styled.li`
//   text-decoration: none;
//   color: #2a2a2a;
//   padding: 20px 0;
//   margin-top: 50px;
//   font-family: arial narrow;
//   font-size: 14px;
//   display: block;
//   border-bottom: 1px solid #eaeaea;
//   background-color: white;
//   cursor: pointer;
//   margin: 15px;
//   align-items: left;
//   padding:

//   &:hover {
//     color: red;
//   }
// `;

// const Button = styled.button`
//   text-decoration: none;
//   color: #333333;
//   padding: 10px 15px;
//   font-family: arial narrow;
//   font-size: 15px;
//   display: block;
//   border: 0;
//   background-color: white;
//   cursor: pointer;

//   &:hover {
//     color: #ff462d;
//   }
// `;

const StyledH1 = styled.h1`
  font-size: 40px;
`;

const UserFavorites = () => (
  <StyledH1>Favorites</StyledH1>
  // <AccountContainer>
  //   <LeftDiv>
  //     <Item> {/* <Button onClick={UserFavorites}>FAVORITES</Button> */}</Item>
  //     <Item>
  //       {" "}
  //       <Button onClick={UserReservations}>RESERVATIONS</Button>
  //     </Item>
  //     <Item>
  //       {" "}
  //       <Button onClick={logout}>SIGN OUT</Button>
  //     </Item>
  //   </LeftDiv>
  //   <RightDiv>
  //     <StyledH1>My Favorites</StyledH1>
  //   </RightDiv>
  // </AccountContainer>
);
export default UserFavorites;
