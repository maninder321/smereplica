import React from "react";
import CircleStepper from "./children/CircleStepper/CircleStepper";
import HeadingForm from "./children/HeadingForm/HeadingForm";
import styles from "./formStepHeading.module.css";

function FormStepHeading(props: {
  state: "completed" | "notCompleted" | "idle";
  title: string;
  stepNumber: number;
}) {
  return (
    <div className={styles.formStepHeadingWrapper}>
      <CircleStepper state={props.state} stepNumber={props.stepNumber} />
      <HeadingForm heading={props.title} />
    </div>
  );
}

export default FormStepHeading;
