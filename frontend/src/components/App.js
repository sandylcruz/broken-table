import React from "react";

import GlobalStyle from "../GlobalStyle";
import NavBar from "../NavBar/index";

const App = React.memo(() => (
  <div>
    <GlobalStyle />

    <header>
      <NavBar />
    </header>
  </div>
));

export default App;
