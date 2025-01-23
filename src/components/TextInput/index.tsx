import React from "react";
import { ITextInput } from "../../\btypes";
import styled from "styled-components";

const TextInput: React.FC<ITextInput> = ({ answer, setAnswers, options }) => {
  return (
    <div className="TextInput">
      <Input
        value={options.placeholder}
        onChange={(e) => setAnswers(e.target.value)}
      />
    </div>
  );
};

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radious: 5px;
`;

export default TextInput;
