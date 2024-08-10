"use client";

import { Button, TextField } from "@mui/material";
import React from "react";
import useLogin from "./hooks/useLogin";

function Login() {
  const {
    inputEmail,
    inputPassword,
    setInputEmail,
    setInputPassword,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    handleLogin,
  } = useLogin();

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
        value={inputEmail}
        onChange={(e: any) => {
          setInputEmail(e.target.value);
          if (e.target.value.length > 0) {
            setEmailError(false);
          } else {
            setEmailError(true);
          }
        }}
        error={emailError}
        helperText={emailError ? "Enter Valid Email" : ""}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        style={{ width: "492px", marginBottom: "10px" }}
        value={inputPassword}
        onChange={(e: any) => {
          setInputPassword(e.target.value);
          if (e.target.value.length > 0) {
            setPasswordError(false);
          } else {
            setPasswordError(true);
          }
        }}
        error={passwordError}
        helperText={passwordError ? "Enter Valid Password" : ""}
      />
      <Button
        variant="contained"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
        onClick={() => {
          handleLogin(inputEmail, inputPassword);
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
