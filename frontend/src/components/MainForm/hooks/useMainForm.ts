import React, { useCallback, useRef, useState } from "react";

type MainFormCompletion = {
  sectionOne: "notCompleted" | "completed" | "idle";
  sectionTwo: "notCompleted" | "completed" | "idle";
  sectionThree: "notCompleted" | "completed" | "idle";
  sectionFour: "notCompleted" | "completed" | "idle";
};

function useMainForm() {
  const [sectionOne, setSectionOne] =
    useState<MainFormCompletion["sectionOne"]>("notCompleted");
  const [sectionTwo, setSectionTwo] =
    useState<MainFormCompletion["sectionTwo"]>("idle");
  const [sectionThree, setSectionThree] =
    useState<MainFormCompletion["sectionThree"]>("idle");
  const [sectionFour, setSectionFour] =
    useState<MainFormCompletion["sectionFour"]>("idle");

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
    }
  }, [formCompletionStatusRef]);

  return {
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    setSectionOne,
    setSectionTwo,
    setSectionThree,
    setSectionFour,
    formCompletionStatus,
    setFormCompletionStatus,
    activateNextStep,
    formCompletionStatusRef,
  };
}

export default useMainForm;
