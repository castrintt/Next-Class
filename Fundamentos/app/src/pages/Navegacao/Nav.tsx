import React from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";

type Props = {};

type PathName = {
  pathname: string;
  query: { id: number; name: string };
};

const Nav = (props: Props) => {
  const simpleNavigation: Function = (url: string): void => {
    router.push(url);
  };

  const pathname: string = "/rota-teste/teste";
  const query: PathName["query"] = { id: 60649807375, name: "Igor" };

  const paramsNavigation: Function = (path: PathName): void => {
    router.push({
      pathname: path.pathname,
      query: {
        id: path.query.id,
        name: path.query.name,
      },
    });
  };

  return (
    <div>
      <ul>
        <Link href="/teste/QueryParams?job=Programmer&id=1123">
          <li>Query params</li>
        </Link>
      </ul>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            paramsNavigation({ pathname, query });
          }}
        >
          BUSCAR
        </button>
      </div>
    </div>
  );
};

export default Nav;
