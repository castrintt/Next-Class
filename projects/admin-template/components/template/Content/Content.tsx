import React from "react";
import ContentProps from "../../../interfaces/ContentProps/ContentProps";

const Content = (props: ContentProps) => {
  return <div className={`
    flex flex-col mt-7 
  `}>{props.children}</div>;
};

export default Content;