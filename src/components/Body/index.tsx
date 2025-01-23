import React from "react";
import TextInput from "../TextInput";
import TextAreaInput from "../TextareaInput";
import SelectaInput from "../SelectInput";
import { IOptions, IInput } from "../../\btypes";

interface BodyProps {
  type: string;
  options: IOptions;
  answer: string;
  setAnswer: (newAnswer: string) => void;
}

const Body: React.FC<BodyProps> = ({ type, options, answer, setAnswer }) => {
  let InputComponent: React.ComponentType<IInput> | null = null;

  if (type === "select") {
    InputComponent = SelectaInput;
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
    InputComponent = TextAreaInput;
  }

  if (!InputComponent) {
    return <div>유효하지 않은 Type</div>;
  }

  return (
    <InputComponent answer={answer} setAnswers={setAnswer} options={options} />
  );
};

export default Body;
