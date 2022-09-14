import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

interface IResponse {
  id: number;
  name: string;
  price: number;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/test", {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return {
    props: {
      priceThings: json,
    },
  };
};

const AnotherStatic = ({
  priceThings,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <ul>
        {priceThings?.map((values: IResponse) => (
          <React.Fragment key={values.id}>
            <li>
              <p>{values.name}</p>
              <p>{values.price}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
export default AnotherStatic;
