import React, { useCallback, useState } from "react";
import styles from "./formSectionThird.module.css";
import { useDropzone } from "react-dropzone";
import SingleFileUploader from "./children/SingleFileUploader/SingleFileUploader";
import SpinnerLoader from "@/components/SpinnerLoader/SpinnerLoader";

function FormSectionThird() {
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [files, setFiles] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.fileUploadBox} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={styles.fileUploadButton}>
          <i className="fa-solid fa-file-arrow-up"></i>
        </div>
        <div className={styles.fileUploadText}>
          <span style={{ textDecoration: "underline" }}>Click to Upload</span>{" "}
          or Drag and Drop Bank Statements
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            PDFs (not scanned copies) of company's operating bank current
            account(s) statements for the past 6 months. <br />
            Example: If today is 06 Aug 24, then please upload bank statements
            from Feb 24 to Jul 24 (both months inclusive)
          </div>
        </div>

        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            If your company is multi-banked, then please upload 6 months bank
            statements for each bank account
          </div>
        </div>

        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            If your file is password protected, we request you to remove the
            password and upload the file to avoid submission failure
          </div>
        </div>

        <div className={styles.singleInformation}>
          <span>
            <i className="fa-solid fa-check"></i>
          </span>
          <div>
            In case if you are facing any issue while uploading bank statements,
            Please contact us on support@credilinq.ai
          </div>
        </div>
      </div>
      <SingleFileUploader fileName="ABC" uploadStatus="uploaded" />
      <SingleFileUploader fileName="ABC" uploadStatus="uploaded" />
      <SingleFileUploader fileName="ABC" uploadStatus="uploaded" />
      <SingleFileUploader fileName="ABC" uploadStatus="uploaded" />
      <SingleFileUploader fileName="ABC" uploadStatus="uploaded" />
    </div>
  );
}

export default FormSectionThird;
