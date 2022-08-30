import React from "react";
import { useRouter } from "next/router";

type Props = {};

const QueryParams = (props: Props) => {
  const params = useRouter();
  const queryParams = params.query;

  return (
    <div>
      <h1>{queryParams?.job}</h1>
      <h1>{queryParams?.id}</h1>
    </div>
  );
};

export default QueryParams;
