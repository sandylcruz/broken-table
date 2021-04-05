import React from "react";

import GlobalStyle from "./GlobalStyle";
import NavBar from "./NavBar";

const App = React.memo(() => (
  <div>
    <GlobalStyle />
    <NavBar />
    <h1>BrokenTable</h1>
  </div>
));

export default App;
