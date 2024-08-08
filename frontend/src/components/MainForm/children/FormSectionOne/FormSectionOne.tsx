"use client";

import { TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./formSectionOne.module.css";
import useFormSectionOne from "./hooks/useFormSectionOne";

function FormSectionOne(props: {
  formCompletedCallback: (data: any) => void;
  formNotCompletedCallback: () => void;
}) {
  const {
    companyName,
    companyUEN,
    onChangeCompanyUEN,
    onBlurCompanyUEN,
    onChangeCompanyName,
    onBlurCompanyName,
  } = useFormSectionOne({
    formCompletedCallback: props.formCompletedCallback,
    formNotCompletedCallback: props.formNotCompletedCallback,
  });

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label="Company UEN"
        variant="outlined"
        style={{ width: "492px" }}
        onChange={(e) => onChangeCompanyUEN(e)}
        onBlur={() => onBlurCompanyUEN()}
        value={companyUEN.data}
        error={companyUEN.canShowError ? !companyUEN.completed : false}
        helperText={
          companyUEN.canShowError && !companyUEN.completed
            ? "Company UEN is required"
            : ""
        }
      />
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        style={{ width: "492px" }}
        onChange={(e) => onChangeCompanyName(e)}
        onBlur={() => onBlurCompanyName()}
        value={companyName.data}
        error={companyName.canShowError ? !companyName.completed : false}
        helperText={
          companyName.canShowError && !companyName.completed
            ? companyName.data.length > 0 && companyName.data.length < 2
              ? "Minimum 2 characters required"
              : "Company Name is required"
            : ""
        }
      />
    </div>
  );
}

export default FormSectionOne;
