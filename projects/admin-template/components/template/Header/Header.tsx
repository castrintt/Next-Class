import React from "react";
import HeaderProps from "../../../interfaces/HeaderProps/HeaderProps";
import Title from "../Title/Title";

const Header = (props: HeaderProps) => {
  return (
    <div>
      <Title title={props.title} subTitle={props.subTitle} />
    </div>
  );
};

export default Header;
