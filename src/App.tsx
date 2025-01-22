import { useState } from "react";
import ProgressIndicator from "./components/ProgressIndicator";
import QuestionBox from "./components/QuestionBox";
import { IQuestion } from "./\btypes";

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

function App() {
  const step = 0;
  const [answers, setAnsers] = useState<string[]>([]);
  return (
    <div className="App">
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
}

export default App;
