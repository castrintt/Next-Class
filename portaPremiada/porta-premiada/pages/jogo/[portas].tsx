import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Portas = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.portas}</h1>
    </div>
  );
};

export default Portas;
