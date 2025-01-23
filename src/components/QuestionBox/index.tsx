import { useRecoilState, useRecoilValue } from "recoil";
import { IQuestion } from "../../\btypes";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";
import questionsState from "../../stores/questions/atom";
import answerState from "../../stores/answer/atom";
import { useParams } from "react-router-dom";

const QuestionBox = () => {
  const [answers, setAnswers] = useRecoilState<string[]>(answerState);
  const params = useParams();
  const step = parseInt(params.step || "0", 10);

  const questions = useRecoilValue<IQuestion[]>(questionsState);
  const question = questions[step];
  const setAnswer: (newAnswer: string) => void = (newAnswer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[step] = newAnswer; //
      console.log("updatedAnswers", updatedAnswers);
      return updatedAnswers;
    });
  };

  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        options={question.options}
        answer={answers[step]}
        setAnswer={setAnswer}
      ></Body>
      <ActionButtons />
    </div>
  );
};

export default QuestionBox;
