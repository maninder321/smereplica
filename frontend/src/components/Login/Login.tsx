import { Button, TextField } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "492px",
        margin: "0px auto",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        style={{ width: "492px", marginBottom: "10px", marginTop: "10px" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        style={{ width: "492px", marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
