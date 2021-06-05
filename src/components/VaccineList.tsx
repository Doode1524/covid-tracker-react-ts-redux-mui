import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B2B2B2",
    color: theme.palette.common.black,
    fontSize: 22,
    fontWeight: 900,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#E9E3E6",
    "&:nth-of-type(odd)": {
      backgroundColor: "#E9E3E9",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  continentRed: {
    color: "red",
  },
  continentBlue: {
    color: "blue",
  },
  continentGreen: {
    color: "green",
  },
});

const VaccineList = ({cases, vaccines}: {cases: any, vaccines: any}) => {

  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>Doses Given</StyledTableCell>
            <StyledTableCell>Partially Vaccinated</StyledTableCell>
            <StyledTableCell>Fully Vaccinated</StyledTableCell>
            <StyledTableCell>Population</StyledTableCell>
            <StyledTableCell>Doses/1Mil</StyledTableCell>
            <StyledTableCell>Fully Vaccinated/1Mil</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vaccines.map((data: any) => (
            <StyledTableRow key={Object.keys(data)[0]}>
              <StyledTableCell
                component="th"
                className={
                  data[Object.keys(data)[0]].continent === "North America"
                    ? classes.continentRed
                    : data[Object.keys(data)[0]].continent === "Central America"
                    ? classes.continentRed
                    : data[Object.keys(data)[0]].continent === "South America"
                    ? classes.continentBlue
                    : data[Object.keys(data)[0]].continent === "Europe"
                    ? classes.continentGreen
                    : data[Object.keys(data)[0]].continent === "Southern Europe"
                    ? classes.continentGreen
                    : data[Object.keys(data)[0]].continent === "Western Europe"
                    ? classes.continentGreen
                    : data[Object.keys(data)[0]].continent === "Eastern Europe"
                    ? classes.continentGreen
                    : undefined
                }
                scope="row"
                style={{ fontSize: 15, fontWeight: 500 }}
              >
                {Object.keys(data)[0]}
              </StyledTableCell>
              <StyledTableCell align="center">
                {data[Object.keys(data)[0]].administered}
              </StyledTableCell>
              <StyledTableCell align="center">
                {data[Object.keys(data)[0]].people_partially_vaccinated}
              </StyledTableCell>
              <StyledTableCell align="center">
                {data[Object.keys(data)[0]].people_vaccinated}
              </StyledTableCell>
              <StyledTableCell align="center">
                {data[Object.keys(data)[0]].population}
              </StyledTableCell>
              <StyledTableCell align="center">
                {Math.round(
                  (data[Object.keys(data)[0]].administered /
                    data[Object.keys(data)[0]].population) *
                    1000000
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {Math.round(
                  (data[Object.keys(data)[0]].people_vaccinated /
                    data[Object.keys(data)[0]].population) *
                    1000000
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VaccineList;
