import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

function useFormSectionThird() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    acceptedFiles = acceptedFiles.map((file: any) => {
      file.status = "uploading";
      return file;
    });
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
    },
    maxFiles: 6,
  });
  const [files, setFiles] = useState([]);
  const filesRef = useRef(files);

  const removeFileHandler = useCallback((index: string) => {
    setFiles((prev) => {
      return prev.filter((file, innerIndex) => index != innerIndex + "");
    });
  }, []);

  const [uploadedFiles, setUploadedFiles] = useState<{ id: string }[]>([]);

  const addUploadedFile = useCallback((id: string) => {
    setUploadedFiles((prev) => {
      return [
        ...prev,
        {
          id: id,
        },
      ];
    });
  }, []);

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
