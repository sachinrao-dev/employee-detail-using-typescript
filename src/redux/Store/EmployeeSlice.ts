import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item:<any> [],
};
const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    employeeDetail: (state, action) => {
      state.item = action.payload;
      // console.log(action.payload, "payload");
      
    },
  },
});
export const { employeeDetail } = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
