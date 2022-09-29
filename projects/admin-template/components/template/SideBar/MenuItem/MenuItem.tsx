import React from "react";
import MenuItemProps from "../../../../interfaces/MenuItemProps/MenuItemProps";
import Link from "next/link";

const MenuItem = (props: MenuItemProps) => {
  const renderLink = () => {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 ${props.className} text-gray-600`}
      >
        {props.children}
        <span className="text-xs font-light ">{props.text}</span>
      </a>
    );
  };

  return (
    <li onClick={props.onClick} className={"hover:bg-gray-100 cursor-pointer"}>
      {props.url ? (
        <Link href={typeof props.url === "string" ? props.url : ""}>
          {renderLink()}
        </Link>
      ) : (
        <React.Fragment>{renderLink()}</React.Fragment>
      )}
    </li>
  );
};

export default MenuItem;
