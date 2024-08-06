import React from "react";
import styles from "./headingForm.module.css";

function HeadingForm(props: { heading: string }) {
  return <div className={styles.headingFormWrapper}>{props.heading}</div>;
}

export default HeadingForm;
