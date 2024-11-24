import React from "react";
import Grid from "@mui/material/Grid2";
import { Card, CardContent, Typography } from "@mui/material";
import { ArrowCircleDown, ArrowCircleUp, MoreVert } from "@mui/icons-material";

const ProfitLossComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <Card sx={{ padding: "10px" }}>
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
                justifyContent: "center",
              }}
            >
              <ArrowCircleUp
                color="primary"
                fontSize="large"
                sx={{ marginRight: "5px" }}
              />
              <div>
                <Typography variant="body2" sx={{ fontWeight: "400" }}>
                  Profit Target
                </Typography>
                <Typography
                  color="textDisabled"
                  variant="caption"
                  sx={{ display: "block" }}
                >
                  Of $12.343
                </Typography>
              </div>
            </div>
            <div>
              <MoreVert />
            </div>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "5px" }}>
            <Typography variant="h6">$8908.33</Typography>
          </div>
          <div>
            <Typography variant="caption" color="textDisabled">
              Equity Pass Level : <Typography variant="caption" color="primary">$124,90.0</Typography>
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid size={6}>
        <Card sx={{ padding: "10px" }}>
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
                justifyContent: "center",
              }}
            >
              <ArrowCircleDown
                color="error"
                fontSize="large"
                sx={{ marginRight: "5px" }}
              />
              <div>
                <Typography variant="body2" sx={{ fontWeight: "400" }}>
                  Profit Target
                </Typography>
                <Typography
                  color="textDisabled"
                  variant="caption"
                  sx={{ display: "block" }}
                >
                  Of $12.343
                </Typography>
              </div>
            </div>
            <div>
              <MoreVert />
            </div>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "5px" }}>
            <Typography variant="h6">$1288.33</Typography>
          </div>
          <div>
            <Typography variant="caption" color="textDisabled">
              Equity Breach Level : <Typography variant="caption" color="error">$124,90.0</Typography>
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfitLossComponent;
