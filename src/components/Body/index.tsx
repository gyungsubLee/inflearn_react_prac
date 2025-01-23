import React from "react";
import TextInput from "../TextInput";
import TextAreaInput from "../TextareaInput";
import SelectaInput from "../SelectInput";
import { IBody, IInput } from "../../\btypes";

const Body: React.FC<IBody> = ({ type, options, answer, setAnswers }) => {
  // Define the component type based on ITextInput props
  let InputComponent: React.ComponentType<IInput> | null = null;

  if (type === "select") {
    InputComponent = SelectaInput; // Placeholder
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
    InputComponent = TextAreaInput; // Placeholder
  }

  if (!InputComponent) {
    return <div>유효하지 않은 Type</div>;
  }

  return (
    <InputComponent answer={answer} setAnswers={setAnswers} options={options} />
  );
};

export default Body;
