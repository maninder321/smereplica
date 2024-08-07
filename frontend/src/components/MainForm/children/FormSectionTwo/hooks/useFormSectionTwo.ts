import { FormElementType } from "@/components/MainForm/FormElementType";
import React, { useCallback, useEffect, useRef, useState } from "react";

function useFormSectionTwo({
  formCompletedCallback,
  formNotCompletedCallback,
}: {
  formCompletedCallback: () => void;
  formNotCompletedCallback: () => void;
}) {
  const [fullName, setFullName] = useState<FormElementType>({
    completed: false,
    data: "",
    canShowError: false,
  });
  const [positionWithCompany, setPositionWithCompany] =
    useState<FormElementType>({
      completed: false,
      data: "",
      canShowError: false,
    });
  const [emailAddress, setEmailAddress] = useState<
    FormElementType & { errorMessage: string }
  >({
    completed: false,
    data: "",
    canShowError: false,
    errorMessage: "",
  });
  const [reEnterEmailAddress, setReEnterEmailAddress] = useState<
    FormElementType & { errorMessage: string }
  >({
    completed: false,
    data: "",
    canShowError: false,
    errorMessage: "",
  });
  const [mobileNumber, setMobileNumber] = useState<FormElementType>({
    completed: false,
    data: "",
    canShowError: false,
  });

  useEffect(() => {
    formCompletedHandler();
  }, [
    fullName.completed,
    positionWithCompany.completed,
    emailAddress.completed,
    reEnterEmailAddress.completed,
    mobileNumber.completed,
  ]);

  useEffect(() => {
    validateReEnterEmailAddress(reEnterEmailAddress.data);
    console.log("HIi");
  }, [emailAddress.data]);

  const formCompletedHandler = useCallback(() => {
    if (
      fullName.completed &&
      positionWithCompany.completed &&
      emailAddress.completed &&
      reEnterEmailAddress.completed &&
      mobileNumber.completed
    ) {
      formCompletedCallback();
    } else {
      formNotCompletedCallback();
    }
  }, [
    fullName,
    positionWithCompany,
    emailAddress,
    reEnterEmailAddress,
    mobileNumber,
  ]);

  const validateFullName = useCallback(
    (input: string) => {
      const regex = /^[A-Za-z0-9]{2,}$/;
      if (regex.test(input)) {
        setFullName((prev) => {
          return {
            ...prev,
            completed: true,
          };
        });
      } else {
        setFullName((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setFullName]
  );

  const validatePositionWithCompany = useCallback(
    (input: string) => {
      const regex = /^[A-Za-z0-9]{2,}$/;
      if (regex.test(input)) {
        setPositionWithCompany((prev) => {
          return {
            ...prev,
            completed: true,
          };
        });
      } else {
        setPositionWithCompany((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setPositionWithCompany]
  );

  const validateEmailAddress = useCallback(
    (input: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (input.length == 0) {
        setEmailAddress((prev) => {
          return {
            ...prev,
            errorMessage: "Email is required",
          };
        });
      } else if (!regex.test(input)) {
        setEmailAddress((prev) => {
          return {
            ...prev,
            errorMessage: "Enter a valid email",
          };
        });
      }
      if (regex.test(input)) {
        setEmailAddress((prev) => {
          return {
            ...prev,
            completed: true,
          };
        });
      } else {
        setEmailAddress((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setEmailAddress]
  );

  const validateReEnterEmailAddress = useCallback(
    (input: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (input.length == 0) {
        setReEnterEmailAddress((prev) => {
          return {
            ...prev,
            errorMessage: "Email is required",
          };
        });
      } else if (!regex.test(input)) {
        setReEnterEmailAddress((prev) => {
          return {
            ...prev,
            errorMessage: "Enter a valid email",
          };
        });
      } else if (regex.test(input) && emailAddress.data != input) {
        setReEnterEmailAddress((prev) => {
          return {
            ...prev,
            errorMessage: "Email not match",
          };
        });
      }
      if (regex.test(input) && emailAddress.data === input) {
        setReEnterEmailAddress((prev) => {
          return {
            ...prev,
            completed: true,
          };
        });
      } else {
        setReEnterEmailAddress((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setReEnterEmailAddress, emailAddress]
  );

  const validateMobileNumber = useCallback(
    (input: string) => {
      const regex = /^\d{8}$/;
      if (regex.test(input)) {
        setMobileNumber((prev) => {
          return {
            ...prev,
            completed: true,
          };
        });
      } else {
        setMobileNumber((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setMobileNumber]
  );

  const onChangeFullName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFullName((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validateFullName(e.target.value);
    },
    [setFullName, validateFullName]
  );

  const onBlurFullName = useCallback(() => {
    setFullName((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateFullName(fullName.data);
  }, [setFullName, validateFullName, fullName]);

  const onChangePositionWithCompany = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPositionWithCompany((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validatePositionWithCompany(e.target.value);
    },
    [setPositionWithCompany, validatePositionWithCompany]
  );

  const onBlurPositionWithCompany = useCallback(() => {
    setPositionWithCompany((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validatePositionWithCompany(positionWithCompany.data);
  }, [
    setPositionWithCompany,
    validatePositionWithCompany,
    positionWithCompany,
  ]);

  const onChangeEmailAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setEmailAddress((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validateEmailAddress(e.target.value);
    },
    [setEmailAddress, validateEmailAddress]
  );

  const onBlurEmailAddress = useCallback(() => {
    setEmailAddress((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateEmailAddress(emailAddress.data);
  }, [setEmailAddress, validateEmailAddress, emailAddress]);

  const onChangeReEnterEmailAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setReEnterEmailAddress((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validateReEnterEmailAddress(e.target.value);
    },
    [setReEnterEmailAddress, validateReEnterEmailAddress]
  );

  const onBlurReEnterEmailAddress = useCallback(() => {
    setReEnterEmailAddress((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateReEnterEmailAddress(reEnterEmailAddress.data);
  }, [
    setReEnterEmailAddress,
    validateReEnterEmailAddress,
    reEnterEmailAddress,
  ]);

  const onChangeMobileNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setMobileNumber((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validateMobileNumber(e.target.value);
    },
    [setMobileNumber, validateMobileNumber]
  );

  const onBlurMobileNumber = useCallback(() => {
    setMobileNumber((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateMobileNumber(mobileNumber.data);
  }, [setMobileNumber, validateMobileNumber, mobileNumber]);

  return {
    fullName,
    positionWithCompany,
    emailAddress,
    reEnterEmailAddress,
    mobileNumber,
    setFullName,
    setPositionWithCompany,
    setEmailAddress,
    onChangeFullName,
    onBlurFullName,
    onChangePositionWithCompany,
    onBlurPositionWithCompany,
    onChangeEmailAddress,
    onBlurEmailAddress,
    onChangeReEnterEmailAddress,
    onBlurReEnterEmailAddress,
    onChangeMobileNumber,
    onBlurMobileNumber,
    validateEmailAddress,
  };
}

export default useFormSectionTwo;
