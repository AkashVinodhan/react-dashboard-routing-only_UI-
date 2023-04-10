import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Toolbar } from "@mui/material";
import { useParams } from "react-router-dom";

const CreateUser = () => {
  let initial = {
    name: "",
    email: "",
    website: "",
  };
  const [data, setData] = useState(initial);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((res) => res.json())
        .then(({ name, email, website }) => {
          let temp = { name, email, website }; // shorthand for let temp = {name:name,email:email,website:website}
          setData(temp);
        });
    }
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setData(initial);
  };
  console.log(data);
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h3 sx={{ m: 1 }}>{id ? "Edit User" : "Create new User"}</h3>
        <TextField
          onChange={handleChange}
          fullWidth
          sx={{ m: 1 }}
          id="outlined-search"
          label="Name"
          name="name"
          type="text"
          value={data.name}
        />
        <TextField
          onChange={handleChange}
          fullWidth
          id="outlined-search"
          label="Email"
          name="email"
          type="text"
          sx={{ m: 1 }}
          value={data.email}
        />
        <TextField
          onChange={handleChange}
          fullWidth
          id="outlined-search"
          label="Website"
          name="website"
          type="text"
          sx={{ m: 1 }}
          value={data.website}
        />
        <Button variant="contained" sx={{ m: 1 }} onClick={handleSubmit}>
          {id ? "Edit User" : "Create User"}
        </Button>
      </Box>
    </div>
  );
};

export default CreateUser;
