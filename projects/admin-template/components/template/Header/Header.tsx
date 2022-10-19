import React from "react";
import { useAppData } from "../../../hooks/useAppData/useAppData";
import HeaderProps from "../../../interfaces/HeaderProps/HeaderProps";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Title from "../Title/Title";
import UserPhoto from "../UserPhoto/UserPhoto";

const Header = (props: HeaderProps) => {
  const { theme, setTheme } = useAppData();
  return (
    <div className="flex">
      <Title title={props.title} subTitle={props.subTitle} />
      <div className="flex flex-grow justify-end items-center">
        <ThemeSwitch theme={theme} setTheme={setTheme} />
        <UserPhoto className={"ml-3"} />
      </div>
    </div>
  );
};

export default Header;
