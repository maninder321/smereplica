"use client";

import TableView from "@/components/TableView/TableView";
import React from "react";
import useAuth from "@/hooks/useAuth";

function Result() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <h1>Loading.....</h1>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: "0px 100px",
          }}
        >
          <TableView />
        </div>
      )}
    </>
  );
}

export default Result;
