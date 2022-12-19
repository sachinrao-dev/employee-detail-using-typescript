import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "../Style/DashboardStyle";

function Dashboard(): JSX.Element {
  const employee = useSelector((state: any) => state.employee.item);
  const classes = useStyle();
  return (
    <div className={classes.tableContainer}>
      <div className={classes.allUser}>
        <h3>All Users</h3>
      </div>
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
            {employee.map((item:any) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Link to={`users/${item.id}/personal`}>{item.name}</Link>
                </TableCell>
                <TableCell>{item.dateOfBirth}</TableCell>
                <TableCell>{item.occupation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
