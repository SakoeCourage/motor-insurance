"use client"
import React, { ReactNode } from "react";
import Table from "@app/components/ui/Table";
import { stdSampleData, STD_DTO } from "../sample-data/Samplestp";
import { TableColumn } from "react-data-table-component";
import IconButton from "@components/ui/IconButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

const Moreoptions: React.FC<any> = () => {
  return <DropdownMenu>
    <DropdownMenuTrigger>
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger>
            <Icon icon="solar:menu-dots-square-linear" />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>All Options</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent>
        This will show filters later in life
      </DropdownMenuContent>
    </DropdownMenuTrigger>
  </DropdownMenu>
}


const columns: TableColumn<STD_DTO>[] = [
  {
    name: <div className="text-lg font-medium">#Policy No</div>,
    selector: (row: STD_DTO) => row.PolicyNumber,
  },
  {
    name: <div className="text-lg font-medium">Customer Name</div>,
    selector: (row: STD_DTO) => row.Customer.FullName,
  },
  {
    name: <div className="text-lg font-medium">Customer Email</div>,
    selector: (row: STD_DTO) => row.Customer.Email,
  },
  {
    name: <div className="text-lg font-medium">Open Cover Number</div>,
    selector: (row: STD_DTO) => row.OpenCoverNumber,
  },
  {
    name: <div className="text-lg font-medium">Date Created</div>,
    selector: (row: STD_DTO) => row.CreatedAt
  },
  {
    name: <div className="text-lg font-medium">Action</div>,
    selector: (row: STD_DTO) => <Moreoptions />,
  }
];

const page = () => {
  return <div className=" container mx-auto">
    <div className=" p-5 bg-white rounded-md shadow-sm">
      <Table columns={columns} tableData={stdSampleData} addButtonLabel="New Single Transit Policy" >
      </Table>
    </div>
  </div>;
};

export default page;
