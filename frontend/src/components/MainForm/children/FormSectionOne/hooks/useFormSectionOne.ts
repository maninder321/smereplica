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
  return { companyUEN, setCompanyUEN, companyName, setCompanyName };
}

export default useFormSectionOne;
