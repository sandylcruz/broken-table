import React from "react";

import GlobalStyle from "./GlobalStyle";

const App = React.memo(() => (
  <div>
    <GlobalStyle />
    <h1>BrokenTable</h1>
  </div>
));

export default App;
