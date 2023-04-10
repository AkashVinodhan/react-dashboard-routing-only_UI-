import { Box, Button, TextField, Toolbar } from "@mui/material";
import React from "react";

const EditProfile = () => {
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h3>Edit Profile here</h3>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="outlined-search"
          label="Profile name"
          name="name"
          type="text"
        />
        <TextField
          fullWidth
          id="outlined-search"
          label="Password"
          name="email"
          type="password"
          sx={{ m: 1 }}
        />
        <Button variant="contained" sx={{ m: 1 }}>
          Edit
        </Button>
      </Box>
    </div>
  );
};

export default EditProfile;
