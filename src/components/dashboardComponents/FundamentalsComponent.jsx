import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  AutoGraph,
  MilitaryTech,
  MoreVert,
  SignalCellular1Bar,
  SignalCellularAlt,
} from "@mui/icons-material";

const fundamentalsData = [
  {
    label: "Average Win",
    value: "$642.00",
    showResult: true,
    result: "7%",
    icon: <ArrowCircleUp color="primary" />,
  },
  {
    label: "Average Loss",
    value: "$0.0",
    showResult: true,
    result: "0%",
    icon: <ArrowCircleDown color="error" />,
  },
  {
    label: "Profit Factor",
    value: "6.4",
    showResult: false,
    result: "7%",
    icon: <ArrowCircleUp color="secondary" />,
  },
  {
    label: "Best Trade",
    value: "$8908.99",
    showResult: false,
    result: "7%",
    icon: <SignalCellularAlt color="secondary" />,
  },
  {
    label: "Win Ratio",
    value: "-$4800",
    showResult: false,
    result: "7%",
    icon: <AutoGraph color="success" />,
  },
  {
    label: "Risk Reward",
    value: "$3400",
    showResult: false,
    result: "7%",
    icon: <MilitaryTech color="warning" />,
  },
];

const FundamentalsComponent = () => {
  return (
    <Grid container spacing={2}>
      {fundamentalsData.map((attribute) => (
        <Grid size={4}>
          <Card sx={{ padding: "10px" }}>
            <div style={{ display: "flex" }}>
              {attribute.icon}
              <Typography
                variant="body1"
                sx={{ fontWeight: "400", marginLeft: "10px" }}
              >
                {attribute.label}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div>
                <Typography variant="h6">{attribute.value}</Typography>
              </div>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default FundamentalsComponent;
