import { StrictMode } from "react";
import { render } from "react-dom";
import "./styles/index.scss";

import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
