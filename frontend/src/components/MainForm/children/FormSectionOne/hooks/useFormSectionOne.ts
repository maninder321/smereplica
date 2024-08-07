import { FormElementType } from "@/components/MainForm/FormElementType";
import React, { useCallback, useEffect, useState } from "react";

function useFormSectionOne({
  formCompletedCallback,
  formNotCompletedCallback,
}: {
  formCompletedCallback: () => void;
  formNotCompletedCallback: () => void;
}) {
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

  useEffect(() => {
    formCompletedHandler();
  }, [companyUEN.completed, companyName.completed]);

  const formCompletedHandler = useCallback(() => {
    if (companyName.completed && companyUEN.completed) {
      formCompletedCallback();
    } else {
      formNotCompletedCallback();
    }
  }, [companyName, companyUEN]);

  const validateCompanyUEN = useCallback(
    (input: string) => {
      const regex = /^[0-9]{8}[A-Za-z]$/;
      if (regex.test(input)) {
        setCompanyUEN((prev) => {
          return {
            ...prev,
            completed: true,
            data: prev.data.toUpperCase(),
          };
        });
        // formCompletedHandler();
      } else {
        setCompanyUEN((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setCompanyUEN, formCompletedHandler]
  );

  const validateCompanyName = useCallback(
    (input: string) => {
      const regex = /^[A-Za-z]{2,}$/;
      if (regex.test(input)) {
        setCompanyName((prev) => {
          return {
            ...prev,
            completed: true,
          };
        });
        // formCompletedHandler();
      } else {
        setCompanyName((prev) => {
          return {
            ...prev,
            completed: false,
          };
        });
      }
    },
    [setCompanyName, formCompletedHandler]
  );

  const onChangeCompanyUEN = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCompanyUEN((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validateCompanyUEN(e.target.value);
    },
    [setCompanyUEN, validateCompanyUEN]
  );

  const onBlurCompanyUEN = useCallback(() => {
    setCompanyUEN((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateCompanyUEN(companyUEN.data);
  }, [setCompanyUEN, validateCompanyUEN, companyUEN]);

  const onChangeCompanyName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setCompanyName((prev) => {
        return {
          ...prev,
          data: e.target.value,
        };
      });
      validateCompanyName(e.target.value);
    },
    [setCompanyName, validateCompanyName]
  );

  const onBlurCompanyName = useCallback(() => {
    setCompanyName((prev) => {
      return {
        ...prev,
        canShowError: true,
      };
    });
    validateCompanyName(companyName.data);
  }, [setCompanyName, validateCompanyName, companyName]);

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
