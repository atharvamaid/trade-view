import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  BatteryFull,
  MoreVert,
} from "@mui/icons-material";
import { PieChart } from "@mui/x-charts";

const MostTradedComponent = () => {
  return (
    <Grid container sx={{ marginTop: "20px" }} spacing={2}>
      <Grid size={12}>
        <Card sx={{ padding: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "400" }}>
              Most Traded
            </Typography>
            <div>
              <MoreVert />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              height: "112px",
              marginTop: "7px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex" }}>
                <BatteryFull color="primary" />
                <Typography variant="body2">NZDUSD</Typography>
              </div>
              <div style={{ display: "flex" }}>
                <BatteryFull color="error" />
                <Typography variant="body2">NZDUSD</Typography>
              </div>
              <div style={{ display: "flex" }}>
                <BatteryFull color="secondary" />
                <Typography variant="body2">NZDUSD</Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex" }}>
                <BatteryFull color="primary" />
                <Typography variant="body2">NZDUSD</Typography>
              </div>
              <div style={{ display: "flex" }}>
                <BatteryFull color="error" />
                <Typography variant="body2">NZDUSD</Typography>
              </div>
              <div style={{ display: "flex" }}>
                <BatteryFull color="secondary" />
                <Typography variant="body2">NZDUSD</Typography>
              </div>
            </div>
            <div>
              <PieChart
                height={150}
                width={150}
                series={[
                  {
                    data: [
                      { value: 19, color: "blue" },
                      { value: 9, color: "red" },
                      { value: 8, color: "purple" },
                    ],
                    startAngle: -135,
                    endAngle: 135,
                  },
                ]}
              />
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MostTradedComponent;
