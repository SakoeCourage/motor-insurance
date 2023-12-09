import { IMenuItem } from "@app/types/appTypes";
import React, { useEffect, useState } from "react";
import IconifyIcon from "../icon";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ISideBar {
  menuItems: { title: string; menus: IMenuItem[] }[];
  hideSidebar: boolean;
  isSingleLayer?: boolean;
  showLeftBorder?: boolean;
  withindicator?: boolean;
}

const Sidebar: React.FC<ISideBar> = ({
  menuItems,
  hideSidebar = false,
  isSingleLayer = true,
  showLeftBorder = true,
  withindicator = false
}) => {
  const pathName = usePathname();

  const renderMenuItem = (item: IMenuItem, index: number, depth: number) => {
    const isActive = pathName === item.path!;

    return !item.items ? (
      <li
        key={index}
        className={`${isActive && isSingleLayer
          ? "active isActiveRoute h-10"
          : isActive && !isSingleLayer
            ? " text-blue-600 "
            : "inactiveRoute"
          } px-4 ml-[1px]`}
      >
        <Link href={item.path! ?? ""} className="space-x-3 flex items-center !text-sm ">
          <IconifyIcon icon={item.icon!} fontSize={15} />
          <div className={item.icon! && "hidden"} />
          {!!withindicator && <Dotindicator />}
          <span>{item.title}</span>
        </Link>
      </li>
    ) : (
      <li key={index} className="ml-[0.5px] !text-sm ">
        <NestedItems
          items={item.items}
          title={item.title}
          icon={item.icon}
          activeIndex={index}
          showBorder={showLeftBorder}
          menus={menuItems}
        />
      </li>
    );
  };

  return (
    menuItems &&
    menuItems.length > 0 && (
      <ul className={`flex flex-col side-menu gap-4 overflow-y-auto`}>
        {menuItems.map((x, index) => {
          return (
            <li
              key={index}
              className="flex flex-col gap-2 overflow-hidden h-fit"
            >
              <span
                className={`!text-xs text-gray-400 font-thin pl-5 ${!x.title && "hidden"
                  } ${hideSidebar && "hidden"}`}
              >
                {x.title}
              </span>
              <ul className="flex flex-col gap-4">
                {x.menus.map((item, index) => renderMenuItem(item, index, 1))}
              </ul>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Sidebar;

const Dotindicator = () => {
  return <svg className=" text-inherit bg-inherit" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z" /></svg>
}


const NestedItems: React.FC<{
  items: IMenuItem[];
  title: string;
  icon?: string;
  activeIndex?: number;
  showBorder: boolean;
  menus: any[];
}> = ({ items, title, icon, activeIndex, showBorder = true, menus }) => {
  const pathName = usePathname();

  const [subMenuItem, setSubMenuItem] = useState(-1);
  const header = pathName.split("/")[3];

  const toggleSubMenu = (index: any) => {
    setSubMenuItem(subMenuItem === index ? -1 : index);
  };

  const showSideBorder = checkName(header, title);


  return (
    <ul className="">
      <li
        className={` ${(subMenuItem === activeIndex && showBorder) ||
          (showSideBorder && showBorder)
          ? "open isActiveMenuList"
          : subMenuItem === activeIndex && !showBorder
            ? "open"
            : "closed isNotActiveMenuList"
          } flex flex-col w-full overflow-hidden `}
      >
        <button
          className="flex justify-between items-center w-full pr-2 hover:text-blue-600 "
          onClick={() => toggleSubMenu(activeIndex)}
        >
          <div className="flex items-center gap-3 pl-4">
            <IconifyIcon icon={icon!} />
            <div className={icon && "hidden"} />
            <span>{title}</span>
          </div>
          <IconifyIcon
            icon={subMenuItem === activeIndex ? "ep:arrow-up" : "ep:arrow-down"}
            fontSize={15}
          />
        </button>
        {(showSideBorder || subMenuItem === activeIndex) &&
          items.map((item, index) => {
            return (
              // <div key={index} className="-mt-2 ">
              <Sidebar
                withindicator={true}
                key={index}
                menuItems={[{ title: "", menus: [item] }]}
                hideSidebar={false}
                isSingleLayer={false}
                showLeftBorder={
                  menus.find((x) =>
                    x.menus.find((y: any) => y.path === item.path)
                  )
                    ? true
                    : false
                }
              />
              //  </div>
            );
          })}
      </li>
    </ul>
  );
};

const checkName = (pathName: string, title: string) => {
  const transformedString = pathName
    .replace(/_/g, " ")
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());

  // console.log(transformedString);
  const finalResult = transformedString + ".";
  // console.log(finalResult, title);
  return title.includes(".")
    ? finalResult === title
    : transformedString === title;
};
