"use client";

import React, { useState } from "react";
import FormSectionOne from "./children/FormSectionOne/FormSectionOne";
import FormSectionTwo from "./children/FormSectionTwo/FormSectionTwo";
import FormSectionThird from "./children/FormSectionThird/FormSectionThird";
import FormSectionFour from "./children/FormSectionFour/FormSectionFour";
import styles from "./mainForm.module.css";
import HeadingForm from "../FormStepHeading/children/HeadingForm/HeadingForm";
import FormStepHeading from "../FormStepHeading/FormStepHeading";
import { Button } from "@mui/material";

type MainFormCompletion = {
  sectionOne: "notCompleted" | "completed" | "idle";
  sectionTwo: "notCompleted" | "completed" | "idle";
  sectionThree: "notCompleted" | "completed" | "idle";
  sectionFour: "notCompleted" | "completed" | "idle";
};

function MainForm() {
  const [completionState, setCompletionState] = useState<MainFormCompletion>({
    sectionOne: "notCompleted",
    sectionTwo: "idle",
    sectionThree: "idle",
    sectionFour: "idle",
  });

  return (
    <div className={styles.mainFormContainer}>
      <FormStepHeading
        state={completionState.sectionOne}
        title="Contact Information"
        stepNumber={1}
      />
      <FormSectionOne
        formNotCompletedCallback={() => {
          setCompletionState((prev) => {
            return {
              ...prev,
              sectionOne: "notCompleted",
              sectionTwo: "idle",
              sectionThree: "idle",
              sectionFour: "idle",
            };
          });
        }}
        formCompletedCallback={() => {
          setCompletionState((prev) => {
            return {
              ...prev,
              sectionOne: "completed",
            };
          });
        }}
      />
      <FormStepHeading
        state={completionState.sectionTwo}
        title="Applicant Information"
        stepNumber={2}
      />
      <FormSectionTwo
        formNotCompletedCallback={() => {
          setCompletionState((prev) => {
            return {
              ...prev,
              sectionOne: "notCompleted",
              sectionTwo: "idle",
              sectionThree: "idle",
              sectionFour: "idle",
            };
          });
        }}
        formCompletedCallback={() => {
          setCompletionState((prev) => {
            return {
              ...prev,
              sectionOne: "completed",
            };
          });
        }}
      />
      <FormStepHeading
        state={completionState.sectionThree}
        title="Upload Documents"
        stepNumber={3}
      />
      <FormSectionThird />
      <FormStepHeading
        state={completionState.sectionFour}
        title="Terms & Conditions"
        stepNumber={4}
      />
      <FormSectionFour />
    </div>
  );
}

export default MainForm;
