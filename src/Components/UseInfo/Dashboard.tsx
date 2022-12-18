import React from "react";
import { useSelector } from "react-redux";
import EmployeeFetchData from "../Constant/EmployeeFetchData";
function Dashboard(): JSX.Element {
  EmployeeFetchData();
  const employee = useSelector((state:any)=> state.employee);
  console.log(employee, "shubham");
  
  return (
    <div>
      <h1>Dashbord sachin</h1>
    </div>
  );
}

export default Dashboard;
