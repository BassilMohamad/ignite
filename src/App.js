import React from "react";
//components
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobaStyles from "./components/GlobalStyles"
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobaStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
