"use client";

import Table from "@app/components/ui/Table";
import React from "react";
import Editor from "./partials/editor";
import { DataRow } from "@app/components/ui/Table";
import { TableColumn } from "react-data-table-component";
import { format } from "date-fns";

const columns: TableColumn<DataRow>[] = [
  {
    name: <div className="text-lg font-medium">Claim #ID</div>,
    selector: (row: any) => row.claimId,
  },
  {
    name: <div className="text-lg font-medium">Customer Type</div>,
    selector: (row: any) => row.customerType,
  },
  {
    name: <div className="text-lg font-medium">First Name</div>,
    selector: (row: any) => row.firstName,
  },
  {
    name: <div className="text-lg font-medium">Last Name</div>,
    selector: (row: any) => row.lastName,
  },
  {
    name: <div className="text-lg font-medium">Other Names</div>,
    selector: (row: any) => format(row.dateCreated, "MMMM dd, yyyy"),
  },
  {
    name: <div className="text-lg font-medium">Identity #</div>,
    selector: (row: any) => row.identityNumber,
  },
];

const data = [
  {
    claimId: 1,
    customerType: "INDIVIDUAL",
    firstName: "Samuel",
    lastName: "Michael",
    dateCreated: new Date(),
    identityNumber: "SLI-001",
  },
  {
    claimId: 2,
    customerType: "INDIVIDUAL",
    firstName: "Babosa",
    lastName: "Bubunei",
    dateCreated: new Date(),
    identityNumber: "SLI-002",
  },
  {
    claimId: 3,
    customerType: "INDIVIDUAL",
    firstName: "Curtis",
    lastName: "Jackson",
    dateCreated: new Date(),
    identityNumber: "SLI-003",
  },
  {
    claimId: "C1",
    customerType: "Company",
    firstName: "Leeds",
    lastName: ".Co",
    dateCreated: new Date(),
    identityNumber: "SLIC-001",
  },
  {
    claimId: 4,
    customerType: "INDIVIDUAL",
    firstName: "Courage",
    lastName: "Sekoe",
    dateCreated: new Date(),
    identityNumber: "SLI-004",
  },
  {
    claimId: 5,
    customerType: "INDIVIDUAL",
    firstName: "Obed",
    lastName: "Maxwell",
    dateCreated: new Date(),
    identityNumber: "SLI-005",
  },
  {
    claimId: 6,
    customerType: "INDIVIDUAL",
    firstName: "Kofi",
    lastName: "Boas",
    dateCreated: new Date(),
    identityNumber: "SLI-006",
  },
  {
    claimId: 7,
    customerType: "INDIVIDUAL",
    firstName: "Jax",
    lastName: "Huggins",
    dateCreated: new Date(),
    identityNumber: "SLI-007",
  },
  {
    claimId: "C2",
    customerType: "Company",
    firstName: "Moon",
    lastName: "Enclave",
    dateCreated: new Date(),
    identityNumber: "SLIC-002",
  },
  {
    claimId: 8,
    customerType: "INDIVIDUAL",
    firstName: "Rodney",
    lastName: "Waldo",
    dateCreated: new Date(),
    identityNumber: "SLI-009",
  },
  {
    claimId: 9,
    customerType: "INDIVIDUAL",
    firstName: "Sharpie",
    lastName: "Akus",
    dateCreated: new Date(),
    identityNumber: "SLI-010",
  },
  {
    claimId: 10,
    customerType: "INDIVIDUAL",
    firstName: "Afua",
    lastName: "Mangellan",
    dateCreated: new Date(),
    identityNumber: "SLI-0011",
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
