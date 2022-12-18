import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getDataFromApi from "./EmployeeData";
import { employeeDetail } from "../../redux/Store/EmployeeSlice";

// console.log(employeeDetail, "asds");

function EmployeeFetchData() {
  const disPatch = useDispatch();
  // console.log();
  // getDataFromApi();
  useEffect(() => {
    getDataFromApi().then((employeeData) => {
      console.log(employeeData, "emp");
      disPatch(employeeDetail(employeeData));
    });
  }, []);
}

export default EmployeeFetchData;