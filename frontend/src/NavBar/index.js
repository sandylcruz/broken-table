import React from "react";

import Logo from "./Logo.svg";

const NavBar = React.memo(() => (
  <div className="nav-bar">
    <Logo />
  </div>
));

export default NavBar;
