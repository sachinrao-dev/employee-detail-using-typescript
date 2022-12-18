import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getDataFromApi from "./EmployeeData";
import { employeeDetail } from "../../redux/Store/EmployeeSlice";

function EmployeeFetchData() {
  const disPatch = useDispatch();
  useEffect(() => {
    getDataFromApi().then((employeeData) => {
      disPatch(employeeDetail(employeeData));
    });
  }, []);
}

export default EmployeeFetchData;