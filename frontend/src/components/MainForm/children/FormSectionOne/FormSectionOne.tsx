"use client";

import { TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./formSectionOne.module.css";
import { FormElementType } from "../../FormElementType";
import useFormSectionOne from "./hooks/useFormSectionOne";

function FormSectionOne(props: {
  formCompletedCallback: () => {};
  formNotCompletedCallback: () => {};
}) {
  const { companyName, companyUEN, setCompanyName, setCompanyUEN } =
    useFormSectionOne();

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label="Company UEN"
        variant="outlined"
        style={{ width: "492px" }}
        onChange={(e) => {
          setCompanyUEN((prev) => {
            return {
              ...prev,
              data: e.target.value,
            };
          });
        }}
        onBlur={() => {
          setCompanyUEN((prev) => {
            return {
              ...prev,
              canShowError: true,
            };
          });
        }}
        error={companyUEN.canShowError ? !companyUEN.completed : false}
        helperText={companyUEN.canShowError ? "Company UEN is required" : ""}
      />
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        style={{ width: "492px" }}
        onChange={(e) =>
          setCompanyName((prev) => {
            return {
              ...prev,
              data: e.target.value,
            };
          })
        }
        onBlur={() => {
          setCompanyName((prev) => {
            return {
              ...prev,
              canShowError: true,
            };
          });
        }}
        error={companyName.canShowError ? !companyName.completed : false}
        helperText={companyName.canShowError ? "Company Name is required" : ""}
      />
    </div>
  );
}

export default FormSectionOne;
