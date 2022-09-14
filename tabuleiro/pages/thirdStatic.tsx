import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
//podemos setar em quanto tempo algum conteudo vai ser gerado novamente com uma propriedade dentro da função getStaticProps
// propriedade revalidate, ela é passada em segundos, se quiser que um componente revalide uma informação em dias meses e etc.. basta fazer uma conversão antes de atribuir

export const getStaticProps: GetStaticProps = () => {
  const math = Math.round(Math.random() * 100);
  return {
    // nesse caso o revalidate vai gerar o conteúdo novamente após 10 segundos
    revalidate: 10,
    props: {
      random: math,
    },
  };
};

const ThirdStatic = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(props.random);
  return (
    <div>
      <h1>{props.random}</h1>
    </div>
  );
};

export default ThirdStatic;
