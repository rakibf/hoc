import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HoverCounter from "./HoverCounter.js";
import ClickCounter from "./ClickCounter";
const root = ReactDOM.createRoot(document.getElementById("root"));

// here ClickCounter is the new component that has been exported with withCounter
// this component is the new component that withCounter returns
root.render(
  <div>
    <HoverCounter commentId={2} extraProp="hi" />
    <ClickCounter commentId={3} extraProp="hello" />
  </div>
);

reportWebVitals();
