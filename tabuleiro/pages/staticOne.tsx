import React from "react";

type Props = {};

const StaticOne = (props: Props) => {
  const [num, setNum] = React.useState<number>(1);

  React.useEffect(() => {
    setNum(Math.round(Math.random() * 10));
  }, []);

  return (
    <div>
      <h1>Estático #01</h1>
      <h2>{num}</h2>
    </div>
  );
};

export default StaticOne;
