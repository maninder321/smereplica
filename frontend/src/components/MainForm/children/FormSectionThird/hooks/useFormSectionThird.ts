import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

function useFormSectionThird(props: {
  formCompletedCallback: () => void;
  formNotCompletedCallback: () => void;
}) {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles = acceptedFiles.map((file: any) => {
      file.status = "uploading";
      return file;
    });
    setFiles(acceptedFiles);
    setFilesCount(acceptedFiles.length);
    filesCountRef.current = acceptedFiles.length;
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
    },
    maxFiles: 6,
  });
  const [files, setFiles] = useState([]);
  const [filesCount, setFilesCount] = useState(0);
  const filesCountRef = useRef(filesCount);
  const filesRef = useRef(files);

  const checkAllFilesUploaded = useCallback(() => {
    console.log("checking file uploades");
    if (filesCountRef.current === 0) {
      props.formNotCompletedCallback();
    }
    if (filesCountRef.current === uploadedFilesCountRef.current) {
      props.formCompletedCallback();
    } else {
      props.formNotCompletedCallback();
    }
  }, []);

  const removeFileHandler = useCallback(
    (index: string) => {
      setFiles((prev) => {
        return prev.filter((file, innerIndex) => index != innerIndex + "");
      });
      setFilesCount(filesCount - 1);
      filesCountRef.current = filesCountRef.current - 1;
      checkAllFilesUploaded();
    },
    [checkAllFilesUploaded]
  );

  const [uploadedFiles, setUploadedFiles] = useState<{ id: string }[]>([]);
  const [uploadedFilesCount, setUploadedFilesCount] = useState(0);
  const uploadedFilesCountRef = useRef(uploadedFilesCount);

  const addUploadedFile = useCallback(
    (id: string, identifier: string) => {
      setUploadedFiles((prev) => {
        return [
          ...prev,
          {
            id: id,
          },
        ];
      });
      setUploadedFilesCount((prev) => prev + 1);
      uploadedFilesCountRef.current = uploadedFilesCountRef.current + 1;
      console.log(filesCountRef.current);
      checkAllFilesUploaded();
    },
    [checkAllFilesUploaded]
  );

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    files,
    setFiles,
    removeFileHandler,
    uploadedFiles,
    setUploadedFiles,
    addUploadedFile,
    filesRef,
  };
}

export default useFormSectionThird;
