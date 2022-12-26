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
import NavBar from "../NabBar";
import useStyle from "../Style/DashboardStyle";

function AcademicInfo() {

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

  const classes = useStyle();
  const { userId } = useParams();
  const academicInfo = useSelector((state: EmployeeData| any) => state.employee.item);
  const [academicInfoData, setAcademicInfoData] = useState<EmployeeData>();
  useEffect(()=>{
    const employeeAcademicInformation = academicInfo.find(
      (item: EmployeeData) => {      
        if (userId) {
          return item.id === parseInt(userId, 10);
        }
      }
    );
    setAcademicInfoData(employeeAcademicInformation);
  }, [academicInfo]);

  return (
    <div className={classes.tableContainer}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>College Name</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Pass Out year</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {academicInfoData?.academic?.collegeName}
              </TableCell>
              <TableCell>
                {academicInfoData?.academic?.degree}
              </TableCell>
              <TableCell>
                {academicInfoData?.academic?.passOut}
              </TableCell>
              <TableCell>
                {academicInfoData?.academic?.address}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AcademicInfo;
