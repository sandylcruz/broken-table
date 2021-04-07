import React from "react";

import GlobalStyle from "../GlobalStyle";
import NavBar from "../NavBar/index";

const App = React.memo(() => (
  <div>
    <header>
      <NavBar />
    </header>
    <GlobalStyle />

    <h1>BrokenTable</h1>
  </div>
));

export default App;
