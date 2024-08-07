import React, { useCallback, useState } from "react";
import styles from "./formSectionThird.module.css";
import { useDropzone } from "react-dropzone";
import SingleFileUploader from "./children/SingleFileUploader/SingleFileUploader";
import SpinnerLoader from "@/components/SpinnerLoader/SpinnerLoader";
import useFormSectionThird from "./hooks/useFormSectionThird";

function FormSectionThird(props: { disable: boolean }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    files,
    setFiles,
    removeFileHandler,
    uploadedFiles,
    addUploadedFile,
  } = useFormSectionThird();

  console.log(uploadedFiles);

  return (
    <div
      className={
        styles.container + ` ${props.disable ? styles.disableFileUpload : ""}`
      }
    >
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
      {files.map((file: any, index) => {
        return (
          <SingleFileUploader
            key={index}
            identifier={index + ""}
            fileName={file.name}
            uploadStatus={file.status}
            onFileRemove={removeFileHandler}
            file={file}
            onFileUploaded={addUploadedFile}
          />
        );
      })}
    </div>
  );
}

export default FormSectionThird;
