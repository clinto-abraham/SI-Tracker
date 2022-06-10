import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";

const BottomNavbar = () => {
  return (
    <BottomNavigation
      sx={{ width: "fullWidth", backgroundColor: "black", height: "100px" }}
    >
      <Typography sx={{ color: "white", margin: "30px" }} variant={"inherit"}>
        @ Copyright 2022 Decarbonization Lever Library All rights reserved.
        Mckinsey Sustainability Insights
      </Typography>
    </BottomNavigation>
  );
};

export default BottomNavbar;
