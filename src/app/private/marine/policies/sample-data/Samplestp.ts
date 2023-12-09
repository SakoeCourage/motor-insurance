import type { TableColumn } from "react-data-table-component";
import { DataRow } from "@app/components/ui/Table";

export interface STD_DTO {
  Id: String | Number;
  PolicyNumber: String;
  Customer: {
    Id: String | Number;
    FullName: String;
    Email: String;
  };
  OpenCoverNumber: String;
  CreatedAt: String;
}

/**
 * stdSampleData - Single TransitPolicy Sample Data
 */
export const stdSampleData: STD_DTO[] = [
  {
    Id: "1",
    PolicyNumber: "#SLICO12345",
    Customer: {
      Id: "101",
      FullName: "John Doe",
      Email: "john.doe@example.com",
    },
    OpenCoverNumber: "OCN00101123",
    CreatedAt: "2023-01-01",
  },
  {
    Id: "2",
    PolicyNumber: "#SLICO67890",
    Customer: {
      Id: "102",
      FullName: "Jane Smith",
      Email: "jane.smith@example.com",
    },
    OpenCoverNumber: "OCN00101456",
    CreatedAt: "2023-02-15",
  },
  {
    Id: "3",
    PolicyNumber: "#SLICO24680",
    Customer: {
      Id: "103",
      FullName: "Alice Johnson",
      Email: "alice.johnson@example.com",
    },
    OpenCoverNumber: "OCN00101789",
    CreatedAt: "2023-03-20",
  },
  {
    Id: "4",
    PolicyNumber: "#SLICO13579",
    Customer: {
      Id: "104",
      FullName: "Bob Williams",
      Email: "bob.williams@example.com",
    },
    OpenCoverNumber: "OCN00101012",
    CreatedAt: "2023-04-10",
  },
  {
    Id: "5",
    PolicyNumber: "#SLICOABCDE",
    Customer: {
      Id: "105",
      FullName: "Eva Davis",
      Email: "eva.davis@example.com",
    },
    OpenCoverNumber: "OCN00101345",
    CreatedAt: "2023-05-05",
  },
  {
    Id: "6",
    PolicyNumber: "#SLICOFGHIJ",
    Customer: {
      Id: "106",
      FullName: "Frank Miller",
      Email: "frank.miller@example.com",
    },
    OpenCoverNumber: "OCN00101678",
    CreatedAt: "2023-06-15",
  },
  {
    Id: "7",
    PolicyNumber: "#SLICOKLMNO",
    Customer: {
      Id: "107",
      FullName: "Karen White",
      Email: "karen.white@example.com",
    },
    OpenCoverNumber: "OCN00101901",
    CreatedAt: "2023-07-02",
  },
  {
    Id: "8",
    PolicyNumber: "#SLICOPQRST",
    Customer: {
      Id: "108",
      FullName: "Paul Green",
      Email: "paul.green@example.com",
    },
    OpenCoverNumber: "OCN00101234",
    CreatedAt: "2023-08-18",
  },
  {
    Id: "9",
    PolicyNumber: "#SLICOUVWXY",
    Customer: {
      Id: "109",
      FullName: "Ursula Brown",
      Email: "ursula.brown@example.com",
    },
    OpenCoverNumber: "OCN00101567",
    CreatedAt: "2023-09-10",
  },
  {
    Id: "10",
    PolicyNumber: "#SLICOZ1234",
    Customer: {
      Id: "110",
      FullName: "Zachary Taylor",
      Email: "zachary.taylor@example.com",
    },
    OpenCoverNumber: "OCN00101890",
    CreatedAt: "2023-10-05",
  },
];
