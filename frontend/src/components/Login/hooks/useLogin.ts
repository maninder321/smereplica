"use client";
import React, { useCallback, useEffect, useState } from "react";

function useLogin() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getJwtToken = useCallback(
    (data: any) => {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      fetch(process.env.NEXT_PUBLIC_API_HOST + "/auth/login", {
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
          if (res.statusCode == 401) {
            alert("Incorrect User Name and Password");
            return;
          }
          localStorage.setItem("sme_access_token", res.access_token);
          window.location.href = "/form";
          // router.push("/result");
        })
        .catch(() => {
          setIsLoading(false);
        });
    },
    [isLoading]
  );

  const handleLogin = useCallback(
    (email: string, password: string) => {
      console.log(email, password);
      if (email.length == 0 || password.length == 0) {
        if (email.length == 0) {
          setEmailError(true);
        }
        if (password.length == 0) {
          setPasswordError(true);
        }
        return;
      }
      getJwtToken({ username: email, password: password });
    },
    [getJwtToken]
  );

  return {
    inputEmail,
    inputPassword,
    setInputEmail,
    setInputPassword,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    handleLogin,
  };
}

export default useLogin;
