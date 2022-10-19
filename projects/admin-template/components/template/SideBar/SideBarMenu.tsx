import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import { IconHome, IconSettings, IconBell, LogOut } from "../../icons/index";
import Logo from "./Logo/Logo";
import { useRouter } from "next/router";

const SideBarMenu = () => {
  const router = useRouter();
  return (
    <aside className="flex flex-col ">
      <div className=" h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Inicio">
          <IconHome />
        </MenuItem>
        <MenuItem url="/settings" text="Ajustes">
          <IconSettings />
        </MenuItem>
        <MenuItem url="/notification" text="Notificações">
          <IconBell />
        </MenuItem>
      </ul>
      <ul>
        <MenuItem
          text="Sair"
          onClick={() => router.push("/login")}
          className={`text-red-600 hover:bg-red-400 hover:text-white dark:text-red-100 dark:hover:text-white`}
        >
          <LogOut />
        </MenuItem>
      </ul>
    </aside>
  );
};

export default SideBarMenu;
