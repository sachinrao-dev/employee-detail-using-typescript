import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
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

function EmploymentInfo() {

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
  const [employementlInfoData, setEmployementInfoData] = useState<EmployeeData>();
  const employementInfo = useSelector((state: EmployeeData | any) => state.employee.item);
  useEffect(() => {
    const employeEmploymentInfo = employementInfo.find(
      (item: EmployeeData) => {      
        if (userId) {
          return item.id === parseInt(userId, 10);
        }
      }
    );
    setEmployementInfoData(employeEmploymentInfo);
  }, [employementInfo]);

  return (
    <div className={classes.tableContainer}>
      <div className={classes.navLink}>
        <NavBar />
        <div className={classes.bar}>
          <NavLink
            className={classes.navBar}
            to={`/users/${userId}/employment/alluserscompanies`}
          >
            Current company of all employees
          </NavLink>
        </div>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Current Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {employementlInfoData?.employment?.currentCompany}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default EmploymentInfo;