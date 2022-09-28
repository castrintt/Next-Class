import React from "react";
import TitleProps from "../../../interfaces/TtileProps/TitleProps";

const Title = (props: TitleProps) => {
  return (
    <div>
      <h1 className={`
      
      `}>
        {props?.title}
      </h1>
      <h2 className={`
      
      `}>
        {props?.subTitle}
      </h2>
    </div>
  );
};

export default Title;
