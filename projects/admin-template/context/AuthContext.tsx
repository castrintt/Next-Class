import firebase from "../FireBase/config";
import { useState } from "react";
import { createContext } from "react";
import IAuthContextProps from "../interfaces/AuthContextProps/AuthContextProps";
import { ReactNode } from "react";
import IUser from "../interfaces/User/User";
import route from "next/router";
import Cookies from "js-cookie";

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
    imageUrl: String(fireBaseUser.photoURL),
  };
};

const manageCookieInformation = (login: string) => {
  if (Boolean(login) === true) {
    Cookies.set("admin-template", login, {
      expires: 5,
    });
  } else {
    Cookies.remove("admin-template");
  }
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

  const configureUserSection = async (fireBaseUser: firebase.User) => {
    if (fireBaseUser?.email) {
      const user = await normalizedUser(fireBaseUser);
      setUser(user);
      manageCookieInformation("true");
      return user.email;
    } else {
      setUser({
        uid: "",
        email: "",
        name: "",
        token: "",
        provider: "",
        imageUrl: "",
      });
      manageCookieInformation("");
      return false;
    }
  };

  const loginGoogle = async () => {
    setLoading(true);
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (response.user) {
      configureUserSection(response.user);
      route.push("/");
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginGoogle, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
