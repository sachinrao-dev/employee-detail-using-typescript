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
  const classes = useStyle();
  const { userId } = useParams();
  const [employementlInfoData, setEmployementInfoData] = useState<any>();
  const employementInfo = useSelector((state: any) => state.employee.item);
  useEffect(() => {
    const employeEmploymentInfo = employementInfo.find(
      (item: any) => {      
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