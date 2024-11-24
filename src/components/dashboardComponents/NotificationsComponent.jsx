import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Error } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const TableHeadings = ["Time", "Type", "Message"];

const NotificationsComponent = () => {
  const [notificationData, setNotificationData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
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
      await fetch("./server/Notifications.json", {
        method: "GET",
        headers: { "Cache-Control": "no-cache", Accept: "application/json" },
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((result) => setNotificationData(result.data));
    })();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
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
              }}
            >
              <Error color="disabled" />
              <Typography
                variant="h6"
                sx={{ marginLeft: "5px", marginTop: "3px" }}
              >
                Notifications
              </Typography>
            </div>
            <div>
              <FormControl
                size="small"
                variant="outlined"
                sx={{ minWidth: 120 }}
              >
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
          <TableContainer component={Paper} sx={{ marginTop: "5px" }}>
            <Table size="small">
              <TableHead sx={{backgroundColor : !isDarkMode ? "#e5e7eb" : "#000"}}>
                <TableRow>
                  {TableHeadings.map((heading) => (
                    <TableCell size="small">{heading}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ fontSize: "13px" }}>
                {notificationData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowData) => (
                    <TableRow >
                      <TableCell size="small">
                        {rowData.time} days ago
                      </TableCell>
                      <TableCell size="small">{rowData.type}</TableCell>
                      <TableCell size="small">{rowData.message}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2]}
            component="div"
            count={notificationData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotificationsComponent;
