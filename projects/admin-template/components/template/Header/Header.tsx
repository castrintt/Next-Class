import React from "react";
import { useAppData } from "../../../hooks/useAppData/useAppData";
import HeaderProps from "../../../interfaces/HeaderProps/HeaderProps";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Title from "../Title/Title";

const Header = (props: HeaderProps) => {
  const { theme, setTheme } = useAppData();
  return (
    <div className="flex">
      <Title title={props.title} subTitle={props.subTitle} />
      <div className="flex flex-grow justify-end">
        <ThemeSwitch theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Header;
