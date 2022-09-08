import React from "react";
import Forms from "../../components/Forms";
import { ILogin } from "../../interfaces/loginInterface";

const Login = () => {
  const [login, setLogin] = React.useState<ILogin>({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  console.log(login.userName);
  return (
    <div>
      <h1>Login</h1>
      <Forms login={login} setLogin={setLogin} />
    </div>
  );
};

export default Login;
