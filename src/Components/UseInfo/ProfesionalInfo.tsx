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

function ProfessionalInfo() {
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
  const [professionalInfoData, setProfessionalInfoData] = useState<EmployeeData>();
  const professionalInfo = useSelector((state: EmployeeData | any) => state.employee.item);
  useEffect(() => {
    const employeeProfessionalInfo = professionalInfo.find(
      (item: EmployeeData) => {
        if (userId) {
          return item.id === parseInt(userId, 10);
        }
      }
    );
    setProfessionalInfoData(employeeProfessionalInfo);
  }, [professionalInfo]);


  return (
    <div className={classes.tableContainer}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Experiences</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {professionalInfoData?.professional?.experiences}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProfessionalInfo;