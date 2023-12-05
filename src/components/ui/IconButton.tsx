import React from "react";
import IconifyIcon from "../icon";
import { cn } from "@app/lib/utils";

interface IIconButton {
  icon: string;
  color: "success" | "primary" | "ghost" | "warning" | "default";
  size?: number;
  className?: string;
  onClick?: () => void;
}
const kind = {
  success: "bg-green-400 hover:bg-green-500 text-white",
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  ghost: " hover:bg-gray-100",
  default: " hover:bg-gray-100",
  warning: "bg-yellow-300  hover:bg-yellow-400",
};

const IconButton: React.FC<IIconButton> = ({
  icon,
  color = "default",
  size = 20,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `p-2 grid place-content-center rounded-full ${kind[color]}`,
        className
      )}
      type="button"
    >
      <IconifyIcon icon={icon} fontSize={size} />
    </button>
  );
};

export default IconButton;
