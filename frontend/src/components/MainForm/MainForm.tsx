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
import useMainForm from "./hooks/useMainForm";

function MainForm() {
  const {
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    setSectionOne,
    setSectionTwo,
    setSectionThree,
    setSectionFour,
    formCompletionStatus,
    setFormCompletionStatus,
    activateNextStep,
    formCompletionStatusRef,
  } = useMainForm();

  return (
    <div className={styles.mainFormContainer}>
      <FormStepHeading
        state={sectionOne}
        title="Contact Information"
        stepNumber={1}
      />
      <FormSectionOne
        formNotCompletedCallback={() => {
          if (formCompletionStatus.sectionOne) {
            setSectionOne("notCompleted");
            setSectionTwo("idle");
            setSectionThree("idle");
            setSectionFour("idle");
          }
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionOne: false,
            };
          });
          formCompletionStatusRef.current.sectionOne = false;
        }}
        formCompletedCallback={() => {
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionOne: true,
            };
          });
          // setSectionTwo("notCompleted");
          formCompletionStatusRef.current.sectionOne = true;
          activateNextStep();
        }}
      />
      <FormStepHeading
        state={sectionTwo}
        title="Applicant Information"
        stepNumber={2}
      />
      <FormSectionTwo
        formNotCompletedCallback={() => {
          if (formCompletionStatus.sectionTwo) {
            setSectionOne("completed");
            setSectionTwo("notCompleted");
            setSectionThree("idle");
            setSectionFour("idle");
          }
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionTwo: false,
            };
          });
          formCompletionStatusRef.current.sectionTwo = false;
        }}
        formCompletedCallback={() => {
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionTwo: true,
            };
          });
          // setSectionThree("notCompleted");
          formCompletionStatusRef.current.sectionTwo = true;
          activateNextStep();
        }}
        activate={sectionTwo === "idle" ? false : true}
      />
      <FormStepHeading
        state={sectionThree}
        title="Upload Documents"
        stepNumber={3}
      />
      <FormSectionThird disable={false} />
      <FormStepHeading
        state={sectionFour}
        title="Terms & Conditions"
        stepNumber={4}
      />
      <FormSectionFour />
    </div>
  );
}

export default MainForm;
