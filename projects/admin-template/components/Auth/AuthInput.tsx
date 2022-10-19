import IAuthProps from "../../interfaces/AuthProps/AuthProps";
import React, { ChangeEvent } from "react";
import { useRouter } from "next/router";

const AuthInput = ({
  authProperties,
  setAuthProperties,
  requirement,
  setRequirement,
  viewMode,
  setViewMode,
}: IAuthProps) => {
  const authInputVerification = (e: ChangeEvent<HTMLInputElement>) => {
    const inputName: string = e.target.name;
    if (e.target.name === "email") {
      setAuthProperties({
        ...authProperties,
        email: e.target.value,
      });
    } else if (e.target.name === "password") {
      setAuthProperties({
        ...authProperties,
        password: e.target.value,
      });
    } else if (e.target.name === "confirmPassword") {
      setAuthProperties({
        ...authProperties,
        confirmPassword: e.target.value,
      });
    }
  };

  const { pathname } = useRouter();

  const pathViewMode = () => {
    if (pathname === "/login") {
      setViewMode("login");
    } else if (pathname === "/register") {
      setViewMode("register");
    }
  };

  return (
    <React.Fragment>
      <form className="flex flex-col mt-4 w-80 mr-auto ml-auto">
        <label>Email</label>
        <input
          type="email"
          value={authProperties.email}
          name={"email"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            authInputVerification(e);
          }}
          required={requirement.email}
          className="px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:outline-none focus:bg-white color-black-400"
        />
      </form>
      <form className="flex flex-col mt-4 w-80 mr-auto ml-auto">
        <label>Senha</label>
        <input
          type="password"
          value={authProperties.password}
          name={"password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            authInputVerification(e);
          }}
          required={requirement.password}
          className="px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:outline-none focus:bg-white color-black-400"
        />
      </form>
      {viewMode === "register" && (
        <form className="flex flex-col mt-4 w-80 mr-auto ml-auto">
          <label>Confirme a senha</label>
          <input
            type="password"
            value={authProperties.confirmPassword}
            name={"confirmPassword"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              authInputVerification(e);
            }}
            required={requirement.confirmPassword}
            className="px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:outline-none focus:bg-white color-black-400"
          />
        </form>
      )}
    </React.Fragment>
  );
};

export default AuthInput;
