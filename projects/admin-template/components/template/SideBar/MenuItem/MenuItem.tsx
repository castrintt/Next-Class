import React from "react";
import MenuItemProps from "../../../../interfaces/MenuItemProps/MenuItemProps";
import Link from "next/link";

const MenuItem = ({ url, children, text }: MenuItemProps) => {
  return (
    <li className={"hover:bg-gray-100"}>
      <Link href={url}>
        <a className={"flex flex-col justify-center items-center h-20 w-20"}>
          {children}
          <span className="text-xs font-light text-gray-600">{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
