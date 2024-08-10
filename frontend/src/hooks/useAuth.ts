"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("sme_access_token");
    fetch(process.env.NEXT_PUBLIC_API_HOST + "/sme/checkAuthenticated", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.statusCode === 401) {
          router.push("/");
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        router.push("/");
        console.log(err);
      });
  }, []);
  return { isAuthenticated };
}

export default useAuth;
