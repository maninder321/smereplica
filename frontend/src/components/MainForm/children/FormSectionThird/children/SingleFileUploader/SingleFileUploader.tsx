import SpinnerLoader from "@/components/SpinnerLoader/SpinnerLoader";
import React from "react";
import styles from "./singleFileUploader.module.css";

function SingleFileUploader(props: {
  fileName: string;
  uploadStatus: "uploading" | "uploaded" | "failed";
}) {
  return (
    <div
      className={
        styles.container +
        ` ${
          props.uploadStatus === "failed"
            ? styles.redBorder + " " + styles.red
            : styles.greenBorder + " " + styles.green
        }`
      }
    >
      {props.uploadStatus === "failed" ? (
        <i
          style={{ fontSize: "24px" }}
          className="fa-solid fa-rotate-right"
        ></i>
      ) : (
        <></>
      )}
      {props.fileName}
      {props.uploadStatus === "failed" ? (
        <i
          style={{ fontSize: "24px" }}
          className="fa-solid fa-circle-xmark"
        ></i>
      ) : props.uploadStatus === "uploading" ? (
        <SpinnerLoader size="30px" color="green" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default SingleFileUploader;
