import React from "react";
import TitleProps from "../../../interfaces/TitleProps/TitleProps";

const Title = (props: TitleProps) => {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">{props?.title}</h1>
      <h2 className="font-light text-sm text-gray-600 dark:text-gray-300">{props?.subTitle}</h2>
    </div>
  );
};

export default Title;
