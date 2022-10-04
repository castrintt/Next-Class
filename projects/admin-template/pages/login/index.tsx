import React, { useState } from "react";
import AuthInput from "../../components/Auth/AuthInput";
import IAuthProperties from "../../interfaces/AuthProperties/AuthProperties";

export type TRequirement = {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
};

const Login = () => {
  const [authProperties, setAuthProperties] = useState<IAuthProperties>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [requirement, setRequirement] = useState<TRequirement>({
    email: true,
    password: true,
    confirmPassword: false,
  });

  const [viewMode, setViewMode] = useState<"login" | "register">("login");

  return (
    <div>
      <h1>Autenticação</h1>
      <AuthInput
        authProperties={authProperties}
        setAuthProperties={setAuthProperties}
        requirement={requirement}
        setRequirement={setRequirement}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
    </div>
  );
};

export default Login;
