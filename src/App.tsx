import React from "react";
import Dashboard from "./Components/UseInfo/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/Store/Store";
import PersonalInfo from "./Components/UseInfo/PersonalInfo";
import EmployeeFetchData from "./Components/Constant/EmployeeFetchData";

function App(): JSX.Element {
  // EmployeeFetchData ();
  return (
    <div>
      <Provider store={Store}>
        {/* {EmployeeFetchData ()} */}
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="users/:userId">
              <Route path="personal" element={<PersonalInfo />} />
              {/* <Route path="professional" element={<ProfessionalInfo />} /> */}
              {/* <Route path="academic" element={<AcademicInfo />} /> */}
              {/* <Route path="employment" element={<EmploymentInfo />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
