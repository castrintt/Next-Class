import React from "react";
import ISwitchThemes from "../../../interfaces/SwitchThemesProps/SwitchThemesProps";
import { MoonIcon, SunIcon } from "../../icons";

const ThemeSwitch = ({ theme, setTheme }: ISwitchThemes) => {
  return (
    <React.Fragment>
      {theme === "dark" ? (
        <div
          onClick={() => setTheme("")}
          className={`bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 sm:flex items-center hidden p-1 rounded-full
          cursor-pointer`}
        >
          <div
            className={`flex item-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}
          >
            <SunIcon size={4} />
          </div>

          <div className={`hidden lg:flex items-center ml-4 text-white`}>
            <span className="text-sm">Light</span>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setTheme("dark")}
          className={`
            bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 sm:flex items-center justify-end
            hidden p-1 rounded-full
            cursor-pointer
        `}
        >
          <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
            <span className="text-sm">Dark</span>
          </div>
          <div
            className={`flex item-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}
          >
            <MoonIcon size={4} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ThemeSwitch;
