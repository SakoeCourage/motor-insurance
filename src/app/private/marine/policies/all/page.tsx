"use client";
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
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";

const Moreoptions: React.FC<any> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icon
          fontSize="2rem"
          className="text-gray-500 active:text-green-500 focus:text-green-500 "
          icon="solar:menu-dots-square-linear"
        />
        <DropdownMenuContent side="left" className="flex flex-col gap-2">
          <DropdownMenuItem className=" flex items-center gap-2">
            <Icon
              fontSize="1.2rem"
              className="text-blue-600"
              icon="carbon:view"
            />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem className=" flex items-center gap-2">
            <Icon
              fontSize="1.2rem"
              className="text-orange-600"
              icon="basil:edit-outline"
            />{" "}
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className=" flex items-center gap-2">
            <Icon
              fontSize="1.2rem"
              className="text-green-600"
              icon="game-icons:confirmed"
            />{" "}
            <span>Approve</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

const columns: TableColumn<STD_DTO>[] = [
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        #Policy No
      </div>
    ),
    selector: (row: STD_DTO) => row.PolicyNumber,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Customer Name
      </div>
    ),
    selector: (row: STD_DTO) => row.Customer.FullName,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Customer Email
      </div>
    ),
    selector: (row: STD_DTO) => row.Customer.Email,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Open Cover Number
      </div>
    ),
    selector: (row: STD_DTO) => row.OpenCoverNumber,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Date Created
      </div>
    ),
    selector: (row: STD_DTO) => row.CreatedAt,
  },
  {
    name: (
      <div className="text-base font-medium text-gray-600 whitespace-nowrap">
        Action
      </div>
    ),
    selector: (row: STD_DTO) => <Moreoptions />,
  },
];

const page = () => {
  return (
    <div className=" container mx-auto">
      <div className=" p-5 bg-white rounded-md shadow-sm">
        <Table
          columns={columns}
          tableData={stdSampleData}
          addButtonLabel="New Policy"
        ></Table>
      </div>
    </div>
  );
};

export default page;
