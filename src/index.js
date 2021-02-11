import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ToggleButton from "./ToggleButton";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <ToggleButton />
  </StrictMode>,
  rootElement
);
