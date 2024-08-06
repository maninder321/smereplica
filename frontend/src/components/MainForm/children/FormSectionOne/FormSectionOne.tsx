import { TextField } from "@mui/material";
import React from "react";
import styles from "./formSectionOne.module.css";

function FormSectionOne() {
  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label="Company UEN"
        variant="outlined"
        style={{ width: "492px" }}
      />
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        style={{ width: "492px" }}
      />
    </div>
  );
}

export default FormSectionOne;
