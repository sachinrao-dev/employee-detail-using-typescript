import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./EmployeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer
  },
});

export default store;
