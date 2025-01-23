import { useState } from "react";
import { useParams } from "react-router-dom";

import { IQuestion } from "../../\btypes";
import ProgressIndicator from "../../components/ProgressIndicator";
import QuestionBox from "../../components/QuestionBox";

const questions: IQuestion[] = [
  {
    title: "질문1 입니다.",
    desc: "설명1 입니다.",
    type: "text",
    required: false,
    options: {
      placeholder: "placeholde 입니디.",
    },
  },
  {
    title: "질문2 입니다.",
    desc: "설명2 입니다.",
    type: "textarea",
    required: false,
    options: {
      placeholder: "placeholde 입니디.",
    },
  },
  {
    title: "질문3 입니다.",
    desc: "설명3 입니다.",
    type: "select",
    required: false,
    options: {
      items: ["답변1", "답변2", "답변3", "답변4", "답변5"],
    },
  },
];

const SurveyPage = () => {
  const params = useParams();

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
