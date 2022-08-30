import React from "react";
import { useRouter } from "next/router";

type Props = {};
type Params = string | string[] | undefined;

const Buscar = (props: Props) => {
  const params = useRouter();
  const routerParamString: Params = params.query.id;
  return <div>{routerParamString}/buscar</div>;
};

export default Buscar;
