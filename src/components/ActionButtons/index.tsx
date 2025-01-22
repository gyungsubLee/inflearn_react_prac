import { IActionButtons } from "../../\btypes";
import { useNavigate } from "react-router-dom";

const ActionButtons: React.FC<IActionButtons> = ({ questionsLength, step }) => {
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            // TODO: 서버로 설문 조사 데이터 넘기기
            navigate("/done");
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default ActionButtons;
