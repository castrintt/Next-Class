import React, { ChangeEvent } from "react";
import { ILogin } from "../interfaces/loginInterface";

interface Props {
  login: ILogin;
  setLogin: (state: ILogin) => void;
}
type Event = ChangeEvent<HTMLInputElement>;

const Forms = ({ login, setLogin }: Props) => {
  const eventHandler = (e: Event) => {
    const targetName = e.target.name;
    if (targetName === "loginInput") {
      setLogin({ ...login, userName: e.target.value });
    } else if (targetName === "passwordInput") {
      setLogin({ ...login, password: e.target.value });
    } else if (targetName === "confirmPasswordInput") {
      setLogin({ ...login, confirmPassword: e.target.value });
    }
  };

  return (
    <div>
      <h1>Formulário</h1>
      <form>
        <div>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            value={login.userName}
            name="loginInput"
            onChange={(e: Event) => eventHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            name="passwordInput"
            value={login.password}
            onChange={(e: Event) => eventHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="">Confirmar Senha:</label>
          <input
            type="password"
            name="confirmPasswordInput"
            value={login.confirmPassword}
            onChange={(e: Event) => eventHandler(e)}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Forms;
