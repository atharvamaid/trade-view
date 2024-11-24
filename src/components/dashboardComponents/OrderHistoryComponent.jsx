import { MonetizationOn } from "@mui/icons-material";
import {
  Typography,
  Card,
  Button,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";


const TableHeadings = [
  "Symbol",
  "Type",
  "Open Date",
  "Open Price",
  "SL",
  "TP",
  "Close Date",
  "Close Price",
  "Lots",
  "Profit",
  "Duration",
  "Gain",
];

const OrderHistoryComponent = () => {
  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    (async () => {
      await fetch("/server/OrderHistory.json", {
        method: "GET",
        headers: { "Cache-Control": "no-cache", Accept: "application/json" },
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((result) => setOrderHistoryData(result.data));
    })();
  }, []);

  return (
    <Card sx={{ padding: "7px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <MonetizationOn color="primary" fontSize="large" />
          <Typography variant="h6" sx={{ marginLeft: "5px" }}>
            Order History
          </Typography>
        </div>
        <div>
          <Button variant="contained" sx={{ marginRight: "10px" }}>
            Open Trades
          </Button>
          <Button variant="outlined" sx={{ marginRight: "10px" }}>
            Open Trades
          </Button>
          <FormControl size="small" variant="outlined">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={10}
              label="Age"
            >
              <MenuItem value={10}>30</MenuItem>
              <MenuItem value={20}>50</MenuItem>
              <MenuItem value={30}>70</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <TableContainer sx={{ marginTop: "5px" }} component={Paper}>
        <Table >
          <TableHead sx={{backgroundColor : !isDarkMode ? "#e5e7eb" : "#000"}}>
            <TableRow>
              {TableHeadings.map((heading) => (
                <TableCell key={heading}>{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderHistoryData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData) => (
              <TableRow key={rowData.label}>
                <TableCell>{rowData?.symbol}</TableCell>
                <TableCell>{rowData?.type}</TableCell>
                <TableCell>{rowData.open_date}</TableCell>
                <TableCell>{rowData.open_price}</TableCell>
                <TableCell>{rowData.SL}</TableCell>
                <TableCell>{rowData.TP}</TableCell>
                <TableCell>{rowData.close_date}</TableCell>
                <TableCell>{rowData.close_price}</TableCell>
                <TableCell>{rowData.lots}</TableCell>
                <TableCell>{rowData.profit}</TableCell>
                <TableCell>{rowData.Duration}</TableCell>
                <TableCell>{rowData.gain}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={orderHistoryData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default OrderHistoryComponent;
