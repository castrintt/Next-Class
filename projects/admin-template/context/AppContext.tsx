import { createContext, useState } from "react";
import IContext from "../interfaces/Context/Context";
import IProvider from "../interfaces/Provider/Provider";

const context = {
  theme: "dark",
  setTheme: () => {},
};

export const AppContext = createContext<IContext>(context);

export const AppContextProvider = ({ children }: IProvider) => {
  const [themeState, setThemeState] = useState<string>("dark");
  return (
    <AppContext.Provider value={{ theme: themeState, setTheme: setThemeState }}>
      {children}
    </AppContext.Provider>
  );
};
