import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableChart.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F6FA",
    color: "#A3A6B4",
    textAlign: "left",
    font: " normal normal 600 14px/18px Source Sans Pro",
    letterSpacing: 0,
    opacity: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#4D4F5C",
    textAlign: "left",
    font: "normal normal normal 14px/20px Source Sans Pro",
    letterSpacing: 0,
    opacity: 1,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(location, views, sales, conversion, total) {
  return { location, views, sales, conversion, total };
}

const rows = [
  createData("Google.com", 8000, 2000, "60%", "$30,000"),
  createData("Facebook.com", 5000, 1500, "50%", "$25,000"),
  createData("Twitter.com", 4000, 1100, "30%", "$21,000"),
  createData("Instagram.com", 7000, 3000, "40%", "$23,000"),
  createData("Linkedin.com", 6000, 1000, "20%", "$18,000"),
];

export default function TableCharts() {
  return (
    <div>
      <div className="table__title">Referrer</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell align="right">Views</StyledTableCell>
              <StyledTableCell align="right">Sales</StyledTableCell>
              <StyledTableCell align="right">Conversion</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.location}>
                <StyledTableCell component="th" scope="row">
                  {row.location}
                </StyledTableCell>
                <StyledTableCell align="right">{row.views}</StyledTableCell>
                <StyledTableCell align="right">{row.sales}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.conversion}
                </StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="table__showmore"> Show More</div>
    </div>
  );
}
