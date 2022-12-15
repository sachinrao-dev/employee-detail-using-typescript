import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "./EmployeeSlice";
import EmployeeFetchData from "../../Components/Constant/EmployeeFetchData";
import EmployeeSlice from "./EmployeeSlice";
// console.log(EmployeeFetchData, "ddfasdfsfs");


const store = configureStore({
  reducer: {
    employee: EmployeeSlice,  
  },
});

console.log(EmployeeFetchData, "Rao");


console.log(store.getState(), "stored value");

export default store;