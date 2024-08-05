import React from "react";
import ReactDOM from "react-dom/client";
// import Ali from "./App.jsx";
// import { App } from "./App.jsx";
import "./index.css";
import { App } from "./App";
import { NameContext } from "./components/Parent";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <NameContext.Provider>
//     <App />
//   </NameContext.Provider>
// );
