/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import AuthInput from "../../components/Auth/AuthInput";
import IAuthProperties from "../../interfaces/AuthProperties/AuthProperties";
import GoogleIcon from "../../assets/google.svg";
import Image from "next/image";
import { ExclamationWarning } from "../../components/icons";
import { useAuthContext } from "../../hooks/useAuthContext/useAuthContext";

export type TRequirement = {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
};

const Login = () => {
  const { user, loginGoogle, loading } = useAuthContext();
  const [error, setError] = useState<null | string>(null);
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
  const showErrorMessage = (
    errorMessage: string,
    timeInSeconds: number = 5
  ) => {
    setError(errorMessage);
    setTimeout(() => {
      setError(null);
    }, timeInSeconds + 1000);
  };

  const handleSubmit = () => {
    if (viewMode === "login") {
      console.log("login");
      console.log(authProperties.email);
      console.log(authProperties.password);
      showErrorMessage("Erro no login!");
    } else {
      console.log("register");
      console.log(authProperties.email);
      console.log(authProperties.password);
      console.log(authProperties.confirmPassword);
      showErrorMessage("Erro no cadastro!");
    }
  };

  const [viewMode, setViewMode] = useState<"login" | "register">("login");

  return (
    <React.Fragment>
      {loading && (
        <div className="w-10 h-10 fixed top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          </span>
        </div>
      )}
      <div className="flex justify-center items-center h-screen">
        <div className=" hidden md:block w-1/2 lg:w-2/3">
          <img
            src="https://source.unsplash.com/random"
            alt="teste"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="w-1/2 ml-auto mr-auto flex flex-col relative top-2 lg:w-1/3">
          <h1 className="text-xl font-bold mb-5 w-80 mr-auto ml-auto">
            {viewMode === "login"
              ? "Entre com a sua conta"
              : "Cadastre-se na plataforma"}
          </h1>
          {error && (
            <div className="bg-red-400 text-white py-1 w-80 ml-auto mr-auto flex items-center justify-start gap-2 border border-red-700 rounded-lg">
              <div className="ml-3">
                <ExclamationWarning />
              </div>
              <span>{error}</span>
            </div>
          )}
          <AuthInput
            authProperties={authProperties}
            setAuthProperties={setAuthProperties}
            requirement={requirement}
            setRequirement={setRequirement}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          <button
            onClick={() => handleSubmit()}
            className="w-80 mr-auto ml-auto  text-white bg-indigo-500 hover:bg-indigo-400 rounded-lg px-4 py-3 mt-6"
          >
            {viewMode === "login" ? "Entrar" : "Cadastrar"}
          </button>
          <hr className="my-6 border-gray-300 w-80 mr-auto ml-auto" />
          <button
            onClick={() => loginGoogle()}
            className="w-80 mr-auto ml-auto bg-red-500 text-white hover:bg-red-400 rounded-lg px-4 py-3  flex justify-center align-center gap-4"
          >
            <Image src={GoogleIcon} alt="icon google" />
            Entrar com Google
          </button>
          {viewMode === "login" ? (
            <p className="mt-8 mr-auto ml-auto">
              Novo por aqui?
              <a
                className="text-blue-500 hover:text-blue-700 cursor-pointer font-semibold"
                onClick={() => {
                  setViewMode("register");
                }}
              >
                Crie uma conta gratuitamente
              </a>
            </p>
          ) : (
            <p className="mt-8 mr-auto ml-auto">
              Já possui um cadastro?
              <a
                className="text-blue-500 hover:text-blue-700 cursor-pointer font-semibold"
                onClick={() => {
                  setViewMode("login");
                }}
              >
                Faça login
              </a>
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
