"use client";
import React, { useState } from "react";
import IconButton from "../ui/IconButton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import IconifyIcon from "../icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
// import DropDown from "../ui/dropDown";

interface INavbar {
  toggleSidebar?: () => void;
  hideSidebar: boolean;
}

const Navbar: React.FC<INavbar> = ({ toggleSidebar, hideSidebar }) => {
  // const [openUserDropdown, setOpenUserDropdown] = useState(false);
  return (
    <nav className="py-1.5 flex items-center gap-4 ">
      <IconButton
        icon={hideSidebar ? "mdi:menu-close" : "ic:round-menu-open"}
        color="default"
        onClick={toggleSidebar}
      />
      <div className="flex-grow">
        <p className=" font-semibold">{/* {$activePage.title} */}</p>
      </div>
      <div className="flex flex-grow sm:hidden" />
      <div className="flex items-center gap-4">
        <div className="user grid place-content-center">
          <div />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AvatarButton
                user={{
                  profileImage: "",
                  initials: "KA",
                  role: "Administrator",
                  firstName: "Kwakye",
                }}
              />
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuTrigger>
          </DropdownMenu>
          {/* <DropDown open={openUserDropdown} /> */}
          {/* 
			<Dropdown otherClasses="mt-2" open={showUser}>
				<div class="px-4 py-2 space-y-2">
					<span class="block text-sm font-bold truncate">{user.fullName}</span>
					<div class="block truncate text-sm">
						<span class="font-light text-gray-500">Role:</span>
						<span class="font-bold">{user.role}</span>
					</div>
					<div class="block truncate text-sm">
						<span class="font-light text-gray-500">Email:</span>
						<span class="font-bold">{user.email}</span>
					</div>
				</div>
				<DropdownItem href="/private/profile">Profile</DropdownItem>
				<Divider />
				<DropdownItem on:click={() => dispatch('signout')}>Sign Out</DropdownItem>
			</Dropdown> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const AvatarButton = ({ user }: { user: any }) => {
  return (
    <button className="!p-0 sm:!p-1 h-10  max-w-[150px] flex items-center rounded-[5px] hover:bg-gray-100  active:outline-none active:border-none">
      <Avatar className="sm:mr-2 w-9 h-9 bg-sky-300 text-sm object-cover">
        <AvatarImage
          src={user.profileImage}
          className="rounded-full w-full object-cover h-full"
        />
        <AvatarFallback className="w-full bg-sky-300">
          {user.initials}
        </AvatarFallback>
      </Avatar>
      <div className="hidden sm:block text-left text-xs sm:pr-2">
        <div className="w-20 truncate">
          <span className="font-semibold">{user.firstName}</span>
        </div>
        <div
          className={`text-gray-500 truncate w-20 ${!user.role && "hidden"}`}
        >
          <span>{user.role}</span>
        </div>
        <p className={`text-gray-500 truncate w-20 flex ${!user.email}`}>
          {user.email}
        </p>
      </div>
      <IconifyIcon icon="ep:arrow-down" fontSize={80} />
    </button>
  );
};
