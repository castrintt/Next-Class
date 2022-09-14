import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      someValue: Math.random(),
    },
  };
};

const SecondStatic = ({
  someValue,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(someValue);

  return (
    <div>
      <h1>{someValue}</h1>
    </div>
  );
};

export default SecondStatic;
