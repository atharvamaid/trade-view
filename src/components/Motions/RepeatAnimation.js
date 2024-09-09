import { Card,CardContent,Typography } from "@mui/material";
import React from "react";

export const RepeatAnimation = () => {
  return (
    <Card sx={{ minWidth: 220 , backgroundColor : "#1976d2", height:60}}>
      <CardContent>
        <Typography className="text-white" variant="p" component="div">
          {"Repeat Animation"}
        </Typography>
      </CardContent>
    </Card>
  );
};
