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
  const classes = useStyle();
  const { userId } = useParams();
  const [professionalInfoData, setProfessionalInfoData] = useState<any>();
  const professionalInfo = useSelector((state: any) => state.employee.item);
  useEffect(() => {
    const employeeProfessionalInfo = professionalInfo.find(
      (item: any) => {
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