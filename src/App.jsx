import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// *Pages
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
// *Components
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUsers(data))
    );
  }, []);
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/users" element={<Users users={users} />} />
            <Route path="/users/:id" element={<CreateUser users={users} />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<EditProfile />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
