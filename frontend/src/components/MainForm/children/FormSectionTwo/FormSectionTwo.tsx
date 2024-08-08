"use client";

import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import styles from "./formSectionTwo.module.css";
import useFormSectionTwo from "./hooks/useFormSectionTwo";

function FormSectionTwo(props: {
  formCompletedCallback: (data: any) => void;
  formNotCompletedCallback: () => void;
  activate: boolean;
}) {
  const {
    fullName,
    positionWithCompany,
    emailAddress,
    reEnterEmailAddress,
    mobileNumber,
    onChangeFullName,
    onBlurFullName,
    onChangePositionWithCompany,
    onBlurPositionWithCompany,
    onChangeEmailAddress,
    onBlurEmailAddress,
    onChangeReEnterEmailAddress,
    onBlurReEnterEmailAddress,
    onChangeMobileNumber,
    onBlurMobileNumber,
  } = useFormSectionTwo({
    formCompletedCallback: props.formCompletedCallback,
    formNotCompletedCallback: props.formNotCompletedCallback,
  });

  return (
    <div className={styles.container}>
      <TextField
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        style={{ width: "492px", marginBottom: "25px" }}
        onChange={(e) => onChangeFullName(e)}
        onBlur={() => onBlurFullName()}
        value={fullName.data}
        error={fullName.canShowError ? !fullName.completed : false}
        helperText={
          fullName.canShowError && !fullName.completed
            ? fullName.data.length > 0 && fullName.data.length < 2
              ? "Minimum 2 characters required"
              : "Full Name is required"
            : ""
        }
        disabled={!props.activate}
      />
      <TextField
        id="outlined-basic"
        label="Position With Company"
        variant="outlined"
        style={{ width: "492px", marginBottom: "25px" }}
        onChange={(e) => onChangePositionWithCompany(e)}
        onBlur={() => onBlurPositionWithCompany()}
        value={positionWithCompany.data}
        error={
          positionWithCompany.canShowError
            ? !positionWithCompany.completed
            : false
        }
        helperText={
          positionWithCompany.canShowError && !positionWithCompany.completed
            ? positionWithCompany.data.length > 0 &&
              positionWithCompany.data.length < 2
              ? "Minimum 2 characters required"
              : "Position is required"
            : ""
        }
        disabled={!props.activate}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          // helperText="The report will be delivered on this email address"
          FormHelperTextProps={{
            style: {
              color:
                emailAddress.canShowError && !emailAddress.completed
                  ? "red"
                  : "#601a79",
            },
          }}
          style={{ width: "492px", marginBottom: "10px" }}
          onChange={(e) => onChangeEmailAddress(e)}
          onBlur={() => onBlurEmailAddress()}
          value={emailAddress.data}
          error={emailAddress.canShowError ? !emailAddress.completed : false}
          helperText={
            emailAddress.canShowError && !emailAddress.completed
              ? emailAddress.errorMessage
              : ""
          }
          disabled={!props.activate}
        />
        <span
          style={{ color: "#601a79", fontSize: "12px", marginBottom: "25px" }}
        >
          The report will be delivered on this email address
        </span>
      </div>

      <TextField
        id="outlined-basic"
        label="Re-enter Email Address"
        variant="outlined"
        style={{ width: "492px", marginBottom: "25px" }}
        onChange={(e) => onChangeReEnterEmailAddress(e)}
        onBlur={() => onBlurReEnterEmailAddress()}
        value={reEnterEmailAddress.data}
        error={
          reEnterEmailAddress.canShowError
            ? !reEnterEmailAddress.completed
            : false
        }
        helperText={
          reEnterEmailAddress.canShowError && !reEnterEmailAddress.completed
            ? reEnterEmailAddress.errorMessage
            : ""
        }
        disabled={!props.activate}
      />
      <TextField
        id="outlined-basic"
        label="Mobile Number"
        variant="outlined"
        style={{ width: "492px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">🇸🇬 +65</InputAdornment>
          ),
        }}
        onChange={(e) => onChangeMobileNumber(e)}
        onBlur={() => onBlurMobileNumber()}
        value={mobileNumber.data}
        error={mobileNumber.canShowError ? !mobileNumber.completed : false}
        helperText={
          mobileNumber.canShowError && !mobileNumber.completed
            ? "Enter a 8-digit Mobile Number"
            : ""
        }
        disabled={!props.activate}
      />
    </div>
  );
}

export default FormSectionTwo;
