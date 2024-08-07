import TableView from "@/components/TableView/TableView";
import React from "react";

function Result() {
  return (
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
  );
}

export default Result;
