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
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          value={authProperties.email}
          name={"email"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            authInputVerification(e);
          }}
          required={requirement.email}
        />
      </div>
      <div className="flex flex-col">
        <label>Senha</label>
        <input
          type="password"
          value={authProperties.password}
          name={"password"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            authInputVerification(e);
          }}
          required={requirement.password}
        />
      </div>
      {viewMode === "register" && (
        <div className="flex flex-col">
          <label>Senha</label>
          <input
            type="password"
            value={authProperties.confirmPassword}
            name={"confirmPassword"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              authInputVerification(e);
            }}
            required={requirement.confirmPassword}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default AuthInput;
