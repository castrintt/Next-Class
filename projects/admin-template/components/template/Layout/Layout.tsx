import React from "react";
import { useAppData } from "../../../hooks/useAppData/useAppData";
import LayoutProps from "../../../interfaces/LayoutProps/LayoutProps";
import Content from "../Content/Content";
import Header from "../Header/Header";
import SideBarMenu from "../SideBar/SideBarMenu";

const Layout = (props: LayoutProps) => {
  const { theme } = useAppData();
  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <SideBarMenu />
      <div
        className={`
          flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800
      `}
      >
        <Header title={props.title} subTitle={props.subTitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default Layout;
