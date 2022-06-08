import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { Link, Outlet } from "react-router-dom";
import "../../styles/App.css";
import MenuNavbar from "./menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="App">
      {" "}
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Link to="lever">
          <Typography sx={{ minWidth: 100 }}>Lever</Typography>
        </Link>
        <Link to="form">
          <Typography sx={{ minWidth: 100 }}>Form</Typography>
        </Link>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <MenuNavbar anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
};

export default Navbar;
