import React from "react";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div>
      <ul>
        <Link href="/teste/QueryParams?job=Programmer&id=1123">
          <li>Query params</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
