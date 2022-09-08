import React from "react";
import { IQuestion } from "../interfaces/questionInterface";

type Props = {};

const Questao = (props: Props) => {
  const [questionProperty, setQuestionProperty] = React.useState<IQuestion>({
    enunciado: "",
    respostas: [],
  });

  React.useEffect(() => {
    fetch("http://localhost:3000/api/123123/questao/")
      .then((response) => response.json())
      .then((json) =>
        setQuestionProperty({
          ...questionProperty,
          enunciado: json.enunciado,
          respostas: json.respostas,
        })
      );
  }, [questionProperty]);

  return (
    <div>
      <h1>Questão</h1>
      <p>{questionProperty.enunciado}</p>
      <ul>
        {questionProperty.respostas?.map((values: string, index: number) => (
          <li key={index}>{values}</li>
        ))}
      </ul>
    </div>
  );
};

export default Questao;
