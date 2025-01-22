export interface IQuestion {
  title: string;
  desc: string;
  type: string;
  required: boolean;
  options: object;
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
  answer: string;
  setAnswers: (newAnswer: string) => void;
}
export interface ITextInput {
  answer: string;
  setAnswers: (newAnswer: string) => void;
}

export interface IActionButtons {
  questionsLength: number;
  step: number;
}
