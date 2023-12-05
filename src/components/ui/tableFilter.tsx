import React from "react";
import IconButton from "./IconButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const TableFilter = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <TooltipProvider>
          <Tooltip delayDuration={300}>
            <TooltipTrigger>
              <IconButton
                color="default"
                icon="material-symbols:filter-list"
                onClick={() => {}}
                className="bg-gray-200"
              />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Table Filters</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenuContent>
          This will show filters later in life
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default TableFilter;
