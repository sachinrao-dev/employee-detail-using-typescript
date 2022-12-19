import React from "react";
import Dashboard from "./Components/UseInfo/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalInfo from "./Components/UseInfo/PersonalInfo";
import ProfessionalInfo from "./Components/UseInfo/ProfesionalInfo";
import AcademicInfo from "./Components/UseInfo/AcademicInfo";
import EmploymentInfo from "./Components/UseInfo/EmploymentInfo";
import EmployeeFetchData from "./Components/Constant/EmployeeFetchData";

function App(): JSX.Element {
  EmployeeFetchData();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="users/:userId">
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="professional" element={<ProfessionalInfo />} />
            <Route path="academic" element={<AcademicInfo />} />
            <Route path="employment" element={<EmploymentInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
