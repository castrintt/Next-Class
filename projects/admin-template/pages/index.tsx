import type { NextPage } from "next";
import Layout from "../components/template/Layout/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout title={"Página Inicial"} subTitle={"Template"}>
        <h3>Conteúdo !!</h3>
      </Layout>
    </div>
  );
};

export default Home;
