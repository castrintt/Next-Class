import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import { IconHome, IconSettings, IconBell } from "../../icons/index";

const SideBarMenu = () => {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Inicio">
          <IconHome />
        </MenuItem>
        <MenuItem url="/settings" text="Ajustes">
          <IconSettings />
        </MenuItem>
        <MenuItem url="/alerts" text="Alertas">
          <IconBell />
        </MenuItem>
      </ul>
    </aside>
  );
};

export default SideBarMenu;
