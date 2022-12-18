import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "../Style/DashboardStyle";
import EmployeeFetchData from "../Constant/EmployeeFetchData";

 
function PersonalInfo(): JSX.Element {
  EmployeeFetchData();

  const classes = useStyle();
  const { userId } = useParams();
  const [personalInfoData, setPersonalInfoData] = useState<any>();
  const personalInfo = useSelector((state:any) => state.employee.item);

  useEffect(() => {
    const employeePersonalInformation = personalInfo.find(
      (item: any) => {      
        if (userId) {
          return item.id === parseInt(userId, 10);
        }
      }
    );
    setPersonalInfoData(employeePersonalInformation);
  }, [personalInfoData]);
  console.log(personalInfo,"useState");
  
  return (
    <div className={classes.tableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell> Birth Date </TableCell>
              <TableCell> Occupation </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {personalInfoData?.personal?.name}
                {/* {console.log(personalInfoData?.personal?.name, "naem")} */}
              </TableCell>
              <TableCell>
                {personalInfoData?.personal?.address}
              </TableCell>
              <TableCell>
                {personalInfoData?.personal?.phoneNo}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PersonalInfo;
