import React from "react";
import styles from "./formSectionFour.module.css";
import { Button, Checkbox } from "@mui/material";

function FormSectionFour() {
  return (
    <div className={styles.container}>
      <div className={styles.termsCheck}>
        <Checkbox />
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
          <div>I have read and understand the Terms & Conditions</div>
        </div>
      </div>
      <div className={styles.submitButton}>
        <Button variant="contained" disabled>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default FormSectionFour;
