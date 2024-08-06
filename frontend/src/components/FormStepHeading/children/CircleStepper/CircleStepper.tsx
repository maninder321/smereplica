import React from "react";
import styles from "./circleStepper.module.css";

function CircleStepper(props: {
  state: "completed" | "notCompleted" | "idle";
  stepNumber: number;
}) {
  return (
    <div
      className={
        styles.circle +
        ` ${
          props.state === "idle"
            ? styles.idle
            : props.state === "completed"
            ? styles.completed
            : styles.notCompleted
        }`
      }
    >
      {props.stepNumber}
    </div>
  );
}

export default CircleStepper;
