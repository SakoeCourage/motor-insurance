import { marineMenuItems } from "@app/data/menuItems";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@app/lib/localStorage";
import { useEffect, useState } from "react";

const appMenuKey = "appMenuKey";

const appList: { name: string; icon: string }[] = [
  { name: "Marine", icon: "carbon:marine-warning" },
  { name: "Fire", icon: "game-icons:fire-bowl" },
  { name: "Motor", icon: "gis:car" },
  { name: "FFD", icon: "fluent:building-desktop-16-regular" },
];
const x = { title: "", menus: [{ title: "", path: "" }] };

const useAppMenuContext = () => {
  const ret: any = loadFromLocalStorage(appMenuKey);
  const [menuItems, setMenuItems] = useState<any>(x);
  const [activeMenu, setActiveMenu] = useState(appList[0]);

  const setItems = (key: string) => {
    const d = key;
    switch (d) {
      case "Marine":
        setMenuItems(marineMenuItems);
        break;

      default:
        setMenuItems(null);
        break;
    }
  };

  const setActiveAppMenu = (x: { name: string; icon: string }) => {
    setActiveMenu(x);
    saveToLocalStorage(appMenuKey, x);
  };

  useEffect(() => {
    if (ret) {
      setActiveMenu(ret);
      setItems(ret?.name);
    }
  }, []);

  useEffect(() => {
    if (activeMenu) {
      setItems(activeMenu.name);
    }
  }, [activeMenu]);

  return { menuItems, setMenuItems, appList, activeMenu, setActiveAppMenu };
};

export default useAppMenuContext;
