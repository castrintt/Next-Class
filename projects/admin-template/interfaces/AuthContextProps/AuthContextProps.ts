import IUser from "../User/User";

export default interface IAuthContextProps {
  user: IUser;
  loginGoogle: () => Promise<void>;
  loading: boolean;
}
