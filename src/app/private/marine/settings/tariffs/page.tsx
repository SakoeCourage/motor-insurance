"use client";
import React, { ReactNode } from "react";
import Table from "@app/components/ui/Table";
import { tarrif, ITarrifDTO } from './tarrifdata'
import { TableColumn } from "react-data-table-component";
import { Icon } from "@iconify/react/dist/iconify.js";
import SideModal from "@app/components/ui/sideModal";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@components/ui/dropdown-menu";


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
                            icon="basil:edit-outline"
                        />
                        <span>Reset Password</span>
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
                            icon="basil:edit-outline"
                        />{" "}
                        <span>Change Account Status</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
};

const columns: TableColumn<ITarrifDTO>[] = [
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                Name
            </div>
        ),
        selector: (row: ITarrifDTO) => row.name,
    },
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                Start Date
            </div>
        ),
        selector: (row: ITarrifDTO) => row.startDate,
    },
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                End Date
            </div>
        ),
        selector: (row: ITarrifDTO) => row.endDate,
    },
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                Basic Premium
            </div>
        ),
        selector: (row: ITarrifDTO) => row.basicPremium,
    },
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                Sticker Fee
            </div>
        ),
        selector: (row: ITarrifDTO) => row.stickerFee,
    },
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                Browncard Sticker Fee
            </div>
        ),
        selector: (row: ITarrifDTO) => row.browncardStickerFee,
    },
    {
        name: (
            <div className=" text-base font-medium text-gray-600 whitespace-nowrap">
                Status
            </div>
        ),
        selector: (row: ITarrifDTO) => <nav>
            {row.status == "Active" ? <nav className=" bg-green-200 text-green-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-green-600"></span> active</nav> :
                <nav className=" bg-red-200 text-red-700 px-2 py-1 rounded-md shadow"> <span className="inline-block h-2 w-2 aspect-square rounded-full bg-red-600"></span> inactive</nav>
            }
        </nav>,
    },

];

const page = () => {
    return (
        <div className=" container mx-auto">

            <div className=" p-5 bg-white rounded-md shadow-sm">
                <Table
                    columns={columns}
                    tableData={tarrif}
                    addButtonLabel="New Tariff"
                ></Table>
            </div>
        </div>
    );
};

export default page;
