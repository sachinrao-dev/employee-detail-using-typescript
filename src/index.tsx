import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Store from "./redux/Store/Store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />

    </Provider>
    {/* <EmployeeFetchData/> */}
  </React.StrictMode>
);
