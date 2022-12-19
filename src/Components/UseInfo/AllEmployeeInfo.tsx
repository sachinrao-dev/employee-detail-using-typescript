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
  const classes = useStyle();
  const allEmployeeDataInfo = useSelector((state: any) => state.employee.item);
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
            {allEmployeeDataInfo.map((item:any) => (
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
