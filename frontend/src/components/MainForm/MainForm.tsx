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
    submit,
    setSubmit,
    formData,
    setFormData,
    submitForm,
    isLoading,
  } = useMainForm();

  console.log(formData);

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
            setSubmit("notActive");
          }
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionOne: false,
            };
          });
          formCompletionStatusRef.current.sectionOne = false;
        }}
        formCompletedCallback={(data: any) => {
          setFormData((prev) => {
            return {
              ...prev,
              ...data,
            };
          });
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
            setSubmit("notActive");
          }
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionTwo: false,
            };
          });
          formCompletionStatusRef.current.sectionTwo = false;
        }}
        formCompletedCallback={(data: any) => {
          setFormData((prev) => {
            return {
              ...prev,
              ...data,
            };
          });
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
      <FormSectionThird
        formCompletedCallback={(data: any) => {
          setFormData((prev) => {
            return {
              ...prev,
              ...data,
            };
          });
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionThree: true,
            };
          });
          // setSectionThree("notCompleted");
          formCompletionStatusRef.current.sectionThree = true;
          activateNextStep();
        }}
        formNotCompletedCallback={() => {
          if (formCompletionStatus.sectionThree) {
            setSectionOne("completed");
            setSectionTwo("completed");
            setSectionThree("notCompleted");
            setSectionFour("idle");
            setSubmit("notActive");
          }
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionThree: false,
            };
          });
          formCompletionStatusRef.current.sectionThree = false;
        }}
        disable={
          sectionThree === "idle"
            ? true
            : sectionThree === "completed"
            ? true
            : false
        }
      />
      <FormStepHeading
        state={sectionFour}
        title="Terms & Conditions"
        stepNumber={4}
      />
      <FormSectionFour
        loading={isLoading}
        onSubmitClick={() => submitForm(formData)}
        activateSubmit={submit === "active" ? true : false}
        disable={sectionFour === "idle" ? true : false}
        formCompletedCallback={() => {
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionFour: true,
            };
          });
          // setSectionThree("notCompleted");
          formCompletionStatusRef.current.sectionFour = true;
          activateNextStep();
        }}
        formNotCompletedCallback={() => {
          if (formCompletionStatus.sectionFour) {
            setSectionOne("completed");
            setSectionTwo("completed");
            setSectionThree("completed");
            setSectionFour("notCompleted");
            setSubmit("notActive");
          }
          setFormCompletionStatus((prev) => {
            return {
              ...prev,
              sectionFour: false,
            };
          });
          formCompletionStatusRef.current.sectionFour = false;
        }}
      />
    </div>
  );
}

export default MainForm;
