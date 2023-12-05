"use client"
import Table, { DataRow } from "@app/components/ui/Table";
import React from "react";
import { TableColumn } from "react-data-table-component";

const columns: TableColumn<DataRow>[] = [
  {
    name: "Title",
    selector: (row: any) => row.title,
  },
  {
    name: "Year",
    selector: (row: any) => row.year,
  },
];

const data: DataRow[] = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
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
