import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import IContext from "../../interfaces/Context/Context";

export type TContext = () => IContext;

export const useAppData: TContext = () => useContext(AppContext);
