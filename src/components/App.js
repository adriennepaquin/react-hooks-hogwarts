import React from "react";
import Nav from "./Nav";
import MainContent from "./MainContent"

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent hogData={hogs} />
    </div>
  );
}


export default App;
