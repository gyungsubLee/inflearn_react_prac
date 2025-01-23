interface IOptions {
  placeholder?: string;
  items?: string[];
}

export interface IQuestion {
  title: string;
  desc: string;
  type: string;
  required: boolean;
  options: IOptions;
}

export interface IQuestionBox {
  question: IQuestion;
  questionsLength: number;
  step: number;
  answer: string;
  setAnswers: (newAnswer: string) => void;
}

export interface IBody {
  type: string;
  options: IOptions;
  answer: string;
  setAnswers: (newAnswer: string) => void;
}

export interface ITextInput {
  answer: string; // 숫자 배열 또는 문자열
  setAnswers: React.Dispatch<string>; // 상태 업데이트 함수
  options: {
    placeholder: string; // 텍스트 입력의 placeholder
  };
}

export interface ISelectInput {
  answer: number[] | string; // 숫자 배열 또는 문자열
  setAnswers: React.Dispatch<React.SetStateAction<number[]>>; // 상태 업데이트 함수
  options: {
    items: string[]; // 선택 입력의 옵션 목록
  };
}

export interface IActionButtons {
  questionsLength: number;
  step: number;
}

export type IInput = ITextInput | ISelectInput;
