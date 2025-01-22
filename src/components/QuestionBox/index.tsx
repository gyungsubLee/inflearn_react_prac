import { IQuestionBox } from "../../\btypes";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

const QuestionBox: React.FC<IQuestionBox> = ({
  question,
  questionsLength,
  step,
  answer,
  setAnswers,
}) => {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} answer={answer} setAnswers={setAnswers}></Body>
      <ActionButtons
        questionsLength={questionsLength}
        step={step}
      ></ActionButtons>
    </div>
  );
};

export default QuestionBox;
