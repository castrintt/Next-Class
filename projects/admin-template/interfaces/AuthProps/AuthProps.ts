import IAuthProperties from "../AuthProperties/AuthProperties";

export default interface IAuthProps {
  authProperties: IAuthProperties;
  setAuthProperties: (newValue: IAuthProperties) => void;
  requirement: {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };

  setRequirement: (booleanState: {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  }) => void;
  viewMode: "login" | "register";
  setViewMode: (newModeState: "login" | "register") => void;
}
