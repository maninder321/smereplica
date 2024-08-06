import { TextField } from "@mui/material";
import React from "react";

function FormSectionTwo() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        style={{ width: "492px" }}
      />
      <TextField
        id="outlined-basic"
        label="Position With Company"
        variant="outlined"
        style={{ width: "492px" }}
      />
      <TextField
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        helperText="The report will be delivered on this email address"
        FormHelperTextProps={{
          style: {
            color: "#601a79",
          },
        }}
        style={{ width: "492px" }}
      />
      <TextField
        id="outlined-basic"
        label="Re-enter Email Address"
        variant="outlined"
        style={{ width: "492px" }}
      />
      <TextField
        id="outlined-basic"
        label="Mobile Number"
        variant="outlined"
        style={{ width: "492px" }}
      />
    </div>
  );
}

export default FormSectionTwo;
