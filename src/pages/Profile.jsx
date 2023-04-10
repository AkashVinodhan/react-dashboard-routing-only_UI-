import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const nav = useNavigate();

  const handleEdit = (id) => {
    nav("/profile/" + id);
  };
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h3>Profiles</h3>
        <TableContainer component={Paper} sx={{ marginX: 10 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontSize: "1.5rem", backgroundColor: "skyblue" }}>
                <TableCell>S.No</TableCell>
                <TableCell align="center">Profile Name</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ fontSize: "1.5rem", backgroundColor: "skyblue" }}>
                <TableCell>1</TableCell>
                <TableCell align="center">Profile 1</TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleEdit(1)}
                    variant="contained"
                    startIcon={<EditIcon />}
                    sx={{ backgroundColor: "skyblue", color: "black" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow sx={{ fontSize: "1.5rem", backgroundColor: "skyblue" }}>
                <TableCell>2</TableCell>
                <TableCell align="center">Profile 2</TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    onClick={() => handleEdit(2)}
                    variant="contained"
                    startIcon={<EditIcon />}
                    sx={{ backgroundColor: "skyblue", color: "black" }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Profile;
