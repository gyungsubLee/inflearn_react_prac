import React from "react";
import { ITextInput } from "../../\btypes";

const TextInput: React.FC<ITextInput> = ({ answer, setAnswers }) => {
  return (
    <div className="TextInput">
      <input value={answer} onChange={(e) => setAnswers(e.target.value)} />
    </div>
  );
};

export default TextInput;
