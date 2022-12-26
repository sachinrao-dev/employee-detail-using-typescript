import { useSelector } from "react-redux";
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

function AllEmployeeInfo() {
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
  const allEmployeeDataInfo = useSelector((state: EmployeeData | any) => state.employee.item);
  return (
    <div className={classes.tableContainer}>
      <NavBar />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allEmployeeDataInfo.map((item:EmployeeData) => (
              <TableRow>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.employment.currentCompany}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllEmployeeInfo;
