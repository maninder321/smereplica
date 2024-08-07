"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "companyUEN", headerName: "Company UEN", width: 200 },
  { field: "companyName", headerName: "Company Name", width: 200 },
  { field: "fullName", headerName: "Full Name", width: 200 },
  { field: "positionInCompany", headerName: "Position In Company", width: 200 },
  { field: "emailAddress", headerName: "Email Address", width: 200 },
  { field: "mobileNumber", headerName: "Mobile Number", width: 200 },
];

// { id: 1, lastName: "Snow", firstName: "Jon", age: 35 }

export default function TableView() {
  React.useEffect(() => {
    fetch("http://localhost:3000/sme/getAll")
      .then((res) => res.json())
      .then((res) => {
        let data = res.data.map((data) => {
          return {
            id: data.id,
            companyUEN: data.companyUEN,
            companyName: data.companyName,
            fullName: data.fullName,
            positionInCompany: data.positionInCompany,
            emailAddress: data.email,
            mobileNumber: data.phoneNumber,
          };
        });
        setRows(data);
      });
  }, []);

  const [rows, setRows] = React.useState([]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}
