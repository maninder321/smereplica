import React, { useState } from "react";
import styles from "./formSectionFour.module.css";
import { Button, Checkbox } from "@mui/material";
import SpinnerLoader from "@/components/SpinnerLoader/SpinnerLoader";
import Link from "next/link";

function FormSectionFour(props: {
  disable: boolean;
  activateSubmit: boolean;
  loading: boolean;
  onSubmitClick: () => void;
  formCompletedCallback: () => void;
  formNotCompletedCallback: () => void;
}) {
  return (
    <div
      className={styles.container + ` ${props.disable ? styles.disabled : ""}`}
    >
      <div className={styles.termsCheck}>
        <Checkbox
          disabled={props.disable}
          onClick={(e: any) => {
            if (e.target.checked) {
              props.formCompletedCallback();
            } else {
              props.formNotCompletedCallback();
            }
          }}
        />
        By ticking, you are confirming that you have understood and are agreeing
        to the details mentioned:
      </div>
      <div className={styles.information}>
        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            I confirm that I am the authorized person to upload bank statements
            on behalf of my company
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            I assure you that uploaded bank statements and provided company
            information match and are of the same company, if there is a
            mismatch then my report will not be generated
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            I understand that this is a general report based on the bank
            statements and Credilinq is not providing a solution or guiding me
            for my business growth
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            I have read and understand the{" "}
            <span className={styles.termsAndCondition}>
              <Link
                href={
                  "https://smehealthcheck.credilinq.ai/terms-and-conditions"
                }
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#601a79",
                }}
              >
                Terms & Conditions
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.submitButton}>
        <Button
          onClick={props.onSubmitClick}
          variant="contained"
          disabled={props.activateSubmit ? false : true}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Submit
          {props.loading && (
            <span
              style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SpinnerLoader size="20px" color="white" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}

export default FormSectionFour;
