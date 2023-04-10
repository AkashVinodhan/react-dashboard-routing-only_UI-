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

const Users = ({ users }) => {
  const nav = useNavigate();

  const handleEdit = (id) => {
    nav("/users/" + id);
  };
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <TableContainer component={Paper} sx={{ marginX: 10 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ fontSize: "1.5rem", backgroundColor: "skyblue" }}>
                <TableCell>S.No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Website</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(({ id, name, email, website }, index) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{email}</TableCell>
                  <TableCell align="center">{website}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => handleEdit(id)}
                      variant="contained"
                      startIcon={<EditIcon />}
                      sx={{ backgroundColor: "skyblue", color: "black" }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Users;
