import React from "react";
import Dashboard from "./Components/UseInfo/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store/Store";
import EmployeeFetchData from "./Components/Constant/EmployeeFetchData";

console.log(EmployeeFetchData, "data");

function App(): JSX.Element {
  // EmployeeFetchData();
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
          </Routes>
        </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
