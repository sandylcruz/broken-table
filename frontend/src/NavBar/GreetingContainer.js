import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { logout as logoutAction } from "../actions/session_actions.js";
import Greeting from "./Greeting";

const GreetingContainer = React.memo((props) => <Greeting {...props} />);

export default GreetingContainer;
