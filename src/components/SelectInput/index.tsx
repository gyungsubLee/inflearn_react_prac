import styled from "styled-components";
import { ISelectInput } from "../../\btypes";

interface ItemProps {
  children: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Item: React.FC<ItemProps> = ({ children, checked, onChange }) => {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
};

const SelectaInput: React.FC<ISelectInput> = ({
  answer = [],
  setAnswers,
  options,
}) => {
  const handleChange = (isChecked: boolean, index: number) => {
    if (isChecked) {
      setAnswers([...answer, index]); // 선택된 값 추가
    } else {
      setAnswers(answer.filter((item) => item !== index)); // 선택된 값 제거
    }
  };

  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => (
        <Item
          key={index}
          checked={answer.includes(index)} // 선택 여부 확인
          onChange={(e) => handleChange(e.target.checked, index)}
        >
          {item}
        </Item>
      ))}
    </SelectInputWrapper>
  );
};

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    border-radius: 100%;
    display: inline-block;
  }

  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }

  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
    padding-left: 10px;
  }

  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;

export default SelectaInput;
