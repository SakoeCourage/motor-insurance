"use client"

import Table from "@app/components/ui/Table";
import React from "react";
import Editor from "./partials/editor";
import { DataRow } from "@app/components/ui/Table";
import { TableColumn } from "react-data-table-component";
import { format } from "date-fns";

const columns: TableColumn<DataRow>[] = [
  {
    name: <div className="text-lg font-medium">Claim #ID</div>,
    selector: (row: any) => row.id,
  },
  {
    name: <div className="text-lg font-medium">Customer Type</div>,
    selector: (row: any) => format(row.date, "MMMM dd, yyyy"),
  },
  {
    name: <div className="text-lg font-medium">Car Registration</div>,
    selector: (row: any) => row.registrationNumber,
  },
];

const data: DataRow[] = [
  {
    id: 1,
    title: "CL132",
    date: new Date(),
    registrationNumber: "GE 1233 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
    customerType:''
  },
];

const page = () => {
  return (
    <div>
      <Table
        Editor={Editor}
        addButtonLabel="New Customer"
        addNewRecordLabel="New Customer"
        updateRecordLabel="Update Customer"
        tableData={data}
        columns={columns}

      />
    </div>
  );
};

export default page;
