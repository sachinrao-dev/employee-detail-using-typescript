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
import NavBar from "../NabBar";

 
function PersonalInfo(): JSX.Element {
  interface EmployeeData {
    id: number,
    name: string,
    dateOfBirth: string,
    occupation: string,
    personal: {
        name: string,
        address: string,
        phoneNo: number,
    },
    professional: { experiences: string },
    academic: {
        collegeName: string,
        degree: string,
        passOut: string,
        address: string,
    },
    employment: {
        currentCompany: string,
        employmentHistory: [
            {
                employer: string,
                year: number,
            },
        ],
    },
}  
  EmployeeFetchData();
  const classes = useStyle();
  const { userId } = useParams();
  const [personalInfoData, setPersonalInfoData] = useState<EmployeeData>();
  const personalInfo = useSelector((state:EmployeeData | any) => state.employee.item);
  useEffect(() => {
    const employeePersonalInformation = personalInfo.find(
      (item: EmployeeData) => {      
        if (userId) {
          return item.id === parseInt(userId, 10);
        }
      }
    );
    setPersonalInfoData(employeePersonalInformation);
  }, [personalInfo]);
  
  return (
    <div className={classes.tableContainer}>
      <NavBar />
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
