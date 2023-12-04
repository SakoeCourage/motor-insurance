"use client";
import PrivateRoute from "@app/components/layout/PrivateRoute";
import React, { useState } from "react";
import LogoUrl from "@app/assets/images/logo.png";
import Image from "next/image";
import Sidebar from "@app/components/layout/Sidebar";
import Navbar from "@app/components/layout/Navbar";
import Divider from "@app/components/ui/Divider";
import IconifyIcon from "@app/components/icon";
import useAppMenuContext from "@app/context/useAppMenuContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const { menuItems, setMenuItems, appList, activeMenu, setActiveAppMenu } =
    useAppMenuContext();
  return (
    <PrivateRoute>
      <div className="w-screen h-screen overflow-hidden relative">
        <aside
          id="sidebar"
          className={`relative ${
            hideSidebar && "hide"
          } overflow-y-hidden  flex flex-col`}
        >
          <a
            // href="/private/dashboard"
            className="brand py-4 flex flex-col  gap-1"
          >
            <Image
              src={LogoUrl}
              alt="logo"
              loading="lazy"
              className={hideSidebar ? "w-10" : "w-[80px]"}
            />
            <span
              className={`font-medium text-[16px]  ${
                hideSidebar ? "hidden" : "hidden md:block"
              }`}
            >
              INSURANCE HUB
            </span>
          </a>
          <Divider className="mt-2 bg-gray-200 mx-4" />
          <div className="pt-3">
            <AppServices
              appList={appList}
              setActiveMenu={setActiveAppMenu}
              activeMenu={activeMenu}
            />
          </div>
          <div className="mt-5 h-full overflow-y-auto flex-grow">
            <Sidebar menuItems={menuItems} hideSidebar={hideSidebar} />
          </div>
        </aside>
        <section id="content" className="w-full h-full">
          <Navbar
            toggleSidebar={() => setHideSidebar(!hideSidebar)}
            hideSidebar={hideSidebar}
          />
          <section className="bg-[#f5e9eb78] w-full h-full flex-grow flex flex-col">
            {/* <div className="head-title pt-3 pb-4 pl-6">
              <div className="left">
                <BreadCrumb options={$breadCrumb} {activeBreadCrumb} on:click={optionClicked} />
              </div>
            </div> */}
            <div className=" w-full h-full flex-grow overflow-hidden px-6 pt-4">
              {children}
            </div>
          </section>
        </section>
      </div>
    </PrivateRoute>
  );
};

export default layout;

const AppServices = ({
  appList,
  activeMenu,
  setActiveMenu,
}: {
  appList: { name: string; icon: string }[];
  activeMenu: { name: string; icon: string };
  setActiveMenu: (x: any) => void;
}) => {
  return (
    <ul className="flex justify-evenly ">
      {appList.map((x, index) => (
        <li
          key={index}
          className={
            x.name === activeMenu.name
              ? "text-blue-600"
              : "text-gray-500 hover:text-blue-600 font-thin"
          }
        >
          <button
            className="flex items-center flex-col gap-1"
            onClick={() => {
              setActiveMenu(x);
            }}
          >
            <IconifyIcon icon={x.icon} fontSize={20} />
            <span className="text-xs ">{x.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};
