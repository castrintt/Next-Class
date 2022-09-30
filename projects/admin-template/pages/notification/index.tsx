import React from "react";
import Layout from "../../components/template/Layout/Layout";
import { useAppData } from "../../hooks/useAppData/useAppData";
import IContext from "../../interfaces/Context/Context";

const Notification = () => {
  const { theme, setTheme }: IContext = useAppData();

  return (
    <Layout
      title="Notificações"
      subTitle="Aqui voce ira gerenciar as suas notificações"
    >
      <button onClick={() => setTheme(theme === "" ? "dark" : "")}>
        alterar
      </button>
    </Layout>
  );
};

export default Notification;
