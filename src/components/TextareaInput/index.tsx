import React from "react";
import { ITextInput } from "../../\btypes";
import styled from "styled-components";

const TextAreaInput: React.FC<ITextInput> = ({
  answer,
  setAnswers,
  options,
}) => {
  return (
    <div className="TextInput">
      <Input
        value={options.placeholder}
        onChange={(e) => setAnswers(e.target.value)}
        placeholder={options.placeholder}
      />
    </div>
  );
};

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radious: 5px;

  font-size: 18px;
  line-height: 21px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
  margin-bottom: 10px;
  display: flex;
  align-item: ;
`;

export default TextAreaInput;
