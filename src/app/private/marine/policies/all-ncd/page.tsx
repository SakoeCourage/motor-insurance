"use client";
import React, { ReactNode, useState } from "react";
import Table from "@app/components/ui/Table";
import { ncdData, NCD_DTO } from "../sample-data/Samplencd";
import { TableColumn } from "react-data-table-component";
import IconButton from "@components/ui/IconButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import Newncd from "./partial/Newncd";
import SideModal from "@app/components/ui/sideModal";
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
        Number
      </div>
    ),
    selector: (row: NCD_DTO) => row.number,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Vehicle Registration
      </div>
    ),
    selector: (row: NCD_DTO) => row.vehicleRegisteration,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Insured
      </div>
    ),
    selector: (row: NCD_DTO) => row.insured,
  },
  {
    name: (
      <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
        Date Created
      </div>
    ),
    selector: (row: NCD_DTO) => row.date,
  },
  {
    name: (
      <div className="text-base font-medium text-gray-600 whitespace-nowrap">
        Action
      </div>
    ),
    selector: (row: NCD_DTO) => <Moreoptions />,
  },
];

const page = () => {
  const [openNewLCDModal, setOpenNewLCDModal] = useState<boolean>(false);
  return (
    <section className=" container mx-auto">
      <SideModal
        closeModal={() => setOpenNewLCDModal(false)}
        title="New NCD"
        open={openNewLCDModal}
        size="md"
      >
        <Newncd />
      </SideModal>
      <div className=" p-5 bg-white rounded-md shadow-sm">
        <Table
          addButtonFunction={() => setOpenNewLCDModal(true)}
          columns={columns}
          tableData={ncdData}
          addButtonLabel="New NCD"
        ></Table>
      </div>
    </section>
  );
};

export default page;
