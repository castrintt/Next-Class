import firebase from "../FireBase/config";
import { useState } from "react";
import { createContext } from "react";
import IAuthContextProps from "../interfaces/AuthContextProps/AuthContextProps";
import { ReactNode } from "react";
import IUser from "../interfaces/User/User";
import route from "next/router";

const CONTEXT: IAuthContextProps = {
  user: { uid: "", email: "", name: "", token: "", provider: "", imageUrl: "" },
  loginGoogle: () =>
    fetch("google.com", { method: "get" }).then((response) => response.json()),
  loading: false,
};

interface IChildrenProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContextProps>(CONTEXT);

const normalizedUser = async (fireBaseUser: firebase.User): Promise<IUser> => {
  const token = await fireBaseUser.getIdToken();
  return {
    uid: fireBaseUser.uid,
    email: fireBaseUser.email,
    name: fireBaseUser.displayName,
    token,
    provider: fireBaseUser.providerData[0]?.providerId,
    imageUrl: fireBaseUser.photoURL,
  };
};

export const AuthContextProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState<IUser>({
    uid: "",
    email: "",
    name: "",
    token: "",
    provider: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const loginGoogle = async () => {
    setLoading(true);
    console.log("login com google");
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    setTimeout(() => {
      route.push("/");
    }, 6000);
  };

  return (
    <AuthContext.Provider value={{ user, loginGoogle, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
