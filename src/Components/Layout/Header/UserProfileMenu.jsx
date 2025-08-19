import React, { useState } from "react";
import {
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";

const UserProfileMenu = ({ user, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleMenu = (event) => {
    if (anchorEl) {
      setAnchorEl(null); // 👈 closes if already open
    } else {
      setAnchorEl(event.currentTarget); // 👈 opens if closed
    }
  };

  const handleClose = () => {
    setAnchorEl(null); // 👈 close on outside click or selection
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1.5}
      sx={{
        backgroundColor: "#1c1c1c",
        borderRadius: "24px",
        padding: "6px 12px",
        cursor: "pointer",
      }}
      onClick={handleToggleMenu} // 👈 toggle logic
    >
      <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>
        {user?.first_name?.[0] || "U"}
      </Avatar>
      <Typography sx={{ color: "#fff", fontWeight: 500, fontSize: 14 }}>
        {user?.first_name} {user?.last_name}
      </Typography>
      <KeyboardArrowDownIcon sx={{ color: "#fff" }} />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableScrollLock={true} // 👈 keep page scroll enabled
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 160,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#fff",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleLogout();
            handleClose(); // 👈 ensure menu closes after logout
          }}
          sx={{
            color: "#3322FF",
            fontWeight: 500,
            gap: 1,
            "&:hover": {
              backgroundColor: "#F0F4FF",
            },
          }}
        >
          <LogoutIcon fontSize="small" sx={{ color: "#3322FF" }} />
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserProfileMenu;
