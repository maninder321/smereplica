import SpinnerLoader from "@/components/SpinnerLoader/SpinnerLoader";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./singleFileUploader.module.css";

function SingleFileUploader(props: {
  fileName: string;
  identifier: string;
  uploadStatus: "uploading" | "uploaded" | "failed";
  onFileRemove: (index: string) => void;
  onFileUploaded: (id: string) => void;
  file: File;
}) {
  const [uploadStatus, setUploadStatus] = useState(props.uploadStatus);
  const [uploadStarted, setUploadStarted] = useState(false);
  const uploadStartedRef = useRef(uploadStarted);

  const handleFileUpload = useCallback(async () => {
    const formData = new FormData();
    formData.append("file", props.file);
    const data = await fetch("http://localhost:3000/file-upload/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          setUploadStatus("failed");
        } else {
          setUploadStatus("uploaded");
          props.onFileUploaded(res.data.id);
        }
      })
      .catch(() => {
        setUploadStatus("failed");
      });
  }, []);

  useEffect(() => {
    if (!uploadStartedRef.current) {
      handleFileUpload();
    }
    uploadStartedRef.current = true;
  }, [uploadStartedRef]);

  return (
    <div
      className={
        styles.container +
        ` ${
          uploadStatus === "failed"
            ? styles.redBorder + " " + styles.red
            : styles.greenBorder + " " + styles.green
        }`
      }
    >
      {uploadStatus === "failed" ? (
        <i
          style={{ fontSize: "24px" }}
          className="fa-solid fa-rotate-right"
        ></i>
      ) : (
        <></>
      )}
      {props.fileName}
      {uploadStatus === "failed" ? (
        <div
          onClick={() => {
            console.log(props.identifier + " remove file");
            props.onFileRemove(props.identifier);
          }}
          style={{ cursor: "pointer" }}
        >
          <i
            style={{ fontSize: "24px" }}
            className="fa-solid fa-circle-xmark"
          ></i>
        </div>
      ) : uploadStatus === "uploading" ? (
        <SpinnerLoader size="30px" color="green" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default SingleFileUploader;
