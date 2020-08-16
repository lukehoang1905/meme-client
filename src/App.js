import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons/faPlusSquare";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
library.add(faImage, faPlusSquare);
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
