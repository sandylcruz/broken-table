import React from "react";

import GlobalStyle from "../GlobalStyle";
import NavBar from "../NavBar/index";

const App = React.memo(() => (
  <div>
    <header>
      <NavBar />
    </header>
    <GlobalStyle />
  </div>
));

export default App;
