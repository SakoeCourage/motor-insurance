"use client";
import Table, { DataRow } from "@app/components/ui/Table";
import React from "react";
import { TableColumn } from "react-data-table-component";
import { format } from "date-fns";

const columns: TableColumn<DataRow>[] = [
  {
    name: <div className="text-lg font-medium">Claim #</div>,
    selector: (row: any) => row.title,
  },
  {
    name: <div className="text-lg font-medium">Registration Date</div>,
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
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
  {
    id: 2,
    title: "CL1343",
    date: new Date(),
    registrationNumber: "GE 1283 - 23",
  },
];

const page = () => {
  return (
    <div className="w-full h-full">
      <Table
        columns={columns}
        tableData={data}
        addButtonLabel="New Claim"
        searchPlaceholder="Search by invoice number..."
      />
    </div>
  );
};

export default page;
