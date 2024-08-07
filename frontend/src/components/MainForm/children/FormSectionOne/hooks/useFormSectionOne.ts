import { FormElementType } from "@/components/MainForm/FormElementType";
import React, { useState } from "react";

function useFormSectionOne() {
  const [companyUEN, setCompanyUEN] = useState<FormElementType>({
    completed: false,
    data: "",
    canShowError: false,
  });
  const [companyName, setCompanyName] = useState<FormElementType>({
    completed: false,
    data: "",
    canShowError: false,
  });

  function validateCompanyUEN(input: string) {
    const regex = /^[0-9]{8}[A-Za-z]$/;
    if (regex.test(input)) {
      setCompanyUEN((prev) => {
        console.log(prev.data.toUpperCase());
        return {
          ...prev,
          completed: true,
          data: prev.data.toUpperCase(),
        };
      });
    } else {
      setCompanyUEN((prev) => {
        return {
          ...prev,
          completed: false,
        };
      });
    }
  }

  function validateCompanyName(input: string) {
    const regex = /^[A-Za-z]{2,}$/;
    if (regex.test(input)) {
      setCompanyName((prev) => {
        return {
          ...prev,
          completed: true,
        };
      });
    } else {
      setCompanyName((prev) => {
        return {
          ...prev,
          completed: false,
        };
      });
    }
  }

  function onChangeCompanyUEN(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCompanyUEN((prev) => {
      return {
        ...prev,
        data: e.target.value,
      };
    });
    validateCompanyUEN(e.target.value);
  }

  function onBlurCompanyUEN() {
    setCompanyUEN((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateCompanyUEN(companyUEN.data);
  }

  function onChangeCompanyName(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCompanyName((prev) => {
      return {
        ...prev,
        data: e.target.value,
      };
    });
    validateCompanyName(e.target.value);
  }

  function onBlurCompanyName() {
    setCompanyName((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateCompanyName(companyName.data);
  }

  return {
    companyUEN,
    setCompanyUEN,
    companyName,
    setCompanyName,
    onChangeCompanyUEN,
    onBlurCompanyUEN,
    onChangeCompanyName,
    onBlurCompanyName,
  };
}

export default useFormSectionOne;
