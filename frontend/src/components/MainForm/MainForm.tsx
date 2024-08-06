import React from "react";
import FormSectionOne from "./children/FormSectionOne/FormSectionOne";
import FormSectionTwo from "./children/FormSectionTwo/FormSectionTwo";
import FormSectionThird from "./children/FormSectionThird/FormSectionThird";
import FormSectionFour from "./children/FormSectionFour/FormSectionFour";
import styles from "./mainForm.module.css";
import HeadingForm from "../FormStepHeading/children/HeadingForm/HeadingForm";
import FormStepHeading from "../FormStepHeading/FormStepHeading";
import { Button } from "@mui/material";

function MainForm() {
  return (
    <div className={styles.mainFormContainer}>
      <FormStepHeading
        state="notCompleted"
        title="Contact Information"
        stepNumber={1}
      />
      <FormSectionOne />
      <FormStepHeading
        state="idle"
        title="Applicant Information"
        stepNumber={2}
      />
      <FormSectionTwo />
      <FormStepHeading state="idle" title="Upload Documents" stepNumber={3} />
      <FormSectionThird />
      <FormStepHeading state="idle" title="Terms & Conditions" stepNumber={4} />
      <FormSectionFour />
    </div>
  );
}

export default MainForm;
