import React from "react";
import TextInput from "../TextInput";
import { IBody, ITextInput } from "../../\btypes";

const Body: React.FC<IBody> = ({ type, answer, setAnswers }) => {
  // Define the component type based on ITextInput props
  let InputComponent: React.ComponentType<ITextInput> | null = null;

  if (type === "select") {
    // InputComponent = SelectInput; // Placeholder
  } else if (type === "text") {
    InputComponent = TextInput;
  } else if (type === "textarea") {
    // InputComponent = TextareaInput; // Placeholder
  }

  if (!InputComponent) {
    return <div>유효하지 않은 Type</div>;
  }

  return <InputComponent answer={answer} setAnswers={setAnswers} />;
};

export default Body;
