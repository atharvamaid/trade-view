import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import { AttachMoney, DarkMode, Key, LightMode, Share } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";


const TopNavigation = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginRight: "515px", marginTop: "4px", fontWeight: "bold" }}
      >
        Welcome back, Alex
      </Typography>
      <Button
        variant="contained"
        sx={{ marginRight: "10px" }}
        startIcon={<AttachMoney />}
      >
        Request Payout
      </Button>
      <Button
        variant="outlined"
        sx={{ marginRight: "10px" }}
        startIcon={<Share />}
      >
        Share Matrices
      </Button>
      <Button variant="outlined" sx={{ marginRight: "10px" }}>
        <Key />
      </Button>
      <IconButton onClick={()=>dispatch(toggleTheme())}>
        {isDarkMode ? <LightMode color="primary"/> : <DarkMode color="primary"/>}
      </IconButton>
    </Box>
  );
};

export default TopNavigation;
