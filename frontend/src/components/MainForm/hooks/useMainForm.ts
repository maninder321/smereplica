import { useRouter } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";

type MainFormCompletion = {
  sectionOne: "notCompleted" | "completed" | "idle";
  sectionTwo: "notCompleted" | "completed" | "idle";
  sectionThree: "notCompleted" | "completed" | "idle";
  sectionFour: "notCompleted" | "completed" | "idle";
  submit: "active" | "notActive";
};

function useMainForm() {
  const router = useRouter();
  const [sectionOne, setSectionOne] =
    useState<MainFormCompletion["sectionOne"]>("notCompleted");
  const [sectionTwo, setSectionTwo] =
    useState<MainFormCompletion["sectionTwo"]>("idle");
  const [sectionThree, setSectionThree] =
    useState<MainFormCompletion["sectionThree"]>("idle");
  const [sectionFour, setSectionFour] =
    useState<MainFormCompletion["sectionFour"]>("idle");
  const [submit, setSubmit] =
    useState<MainFormCompletion["submit"]>("notActive");
  const [formData, setFormData] = useState<{
    companyName: string;
    companyUEN: string;
    fullName: string;
    positionInCompany: string;
    email: string;
    phoneNumber: string;
    attachmentIds: number[];
  }>({
    companyName: "",
    companyUEN: "",
    fullName: "",
    positionInCompany: "",
    email: "",
    phoneNumber: "",
    attachmentIds: [],
  });

  const [formCompletionStatus, setFormCompletionStatus] = useState<{
    sectionOne: boolean;
    sectionTwo: boolean;
    sectionThree: boolean;
    sectionFour: boolean;
  }>({
    sectionOne: false,
    sectionTwo: false,
    sectionThree: false,
    sectionFour: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const formCompletionStatusRef = useRef(formCompletionStatus);

  const activateNextStep = useCallback(() => {
    console.log(formCompletionStatusRef.current);
    if (formCompletionStatusRef.current.sectionOne) {
      setSectionOne("completed");
      setSectionTwo("notCompleted");
    }
    if (formCompletionStatusRef.current.sectionTwo) {
      setSectionTwo("completed");
      setSectionThree("notCompleted");
    }
    if (formCompletionStatusRef.current.sectionThree) {
      setSectionThree("completed");
      setSectionFour("notCompleted");
    }
    if (formCompletionStatusRef.current.sectionFour) {
      setSectionFour("completed");
      setSubmit("active");
    }
  }, [formCompletionStatusRef]);

  const submitForm = useCallback(
    (data: any) => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      fetch("http://localhost:3000/sme/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          router.push("/result");
        })
        .catch(() => {
          setIsLoading(false);
        });
    },
    [isLoading]
  );

  return {
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    submit,
    setSubmit,
    setSectionOne,
    setSectionTwo,
    setSectionThree,
    setSectionFour,
    formCompletionStatus,
    setFormCompletionStatus,
    activateNextStep,
    formCompletionStatusRef,
    formData,
    setFormData,
    submitForm,
    isLoading,
  };
}

export default useMainForm;
