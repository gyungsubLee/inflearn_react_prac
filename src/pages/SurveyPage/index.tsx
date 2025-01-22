import { useState } from "react";
import { useParams } from "react-router-dom";

import { IQuestion, RouteParams } from "../../\btypes";
import ProgressIndicator from "../../components/ProgressIndicator";
import QuestionBox from "../../components/QuestionBox";

const questions: IQuestion[] = [
  {
    title: "질문1 입니다.",
    desc: "설명1 입니다.",
    type: "text",
    required: false,
    options: {},
  },
  {
    title: "질문2 입니다.",
    desc: "설명2 입니다.",
    type: "text",
    required: false,
    options: {},
  },
];

const SurveyPage = () => {
  const params = useParams<RouteParams>();

  const step = parseInt(params.step || "0", 10);
  const [answers, setAnsers] = useState<string[]>([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswers={(newAnswer) => {
          setAnsers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
};

export default SurveyPage;
