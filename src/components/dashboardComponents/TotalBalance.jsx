import { BarChart } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const TotalBalance = () => {
  return (
    <Card>
      <Card
        sx={{
          display: "flex",
          padding: "5px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "50%", marginLeft: "4px" }}>
          <Typography variant="h6" sx={{ fontWeight: "400" }}>
            Total Balance
          </Typography>
          <Typography color="primary" variant="body2" gutterBottom>
            Profit + 0.8 %
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <BarChart color="primary" fontSize="large" />
            <div>
              <Typography variant="subtitle1" sx={{ fontWeight: "400" }}>
                $1234598
              </Typography>
              <Typography
                color="textDisabled"
                variant="caption"
                sx={{ display: "block" }}
              >
                Balance
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <BarChart color="primary" fontSize="large" />
            <div>
              <Typography variant="subtitle1" sx={{ fontWeight: "400" }}>
                $4565764
              </Typography>
              <Typography
                color="textDisabled"
                variant="caption"
                sx={{ display: "block" }}
              >
                Equity
              </Typography>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <LineChart
          xAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [3, 4.4, 5, 3.6, 7, 5.6],
            },
          ]}
          yAxis={[{ data: [90, 95, 100, 105] }]}
          width={500}
          height={250}
        />
      </Card>
    </Card>
  );
};
export default TotalBalance;
