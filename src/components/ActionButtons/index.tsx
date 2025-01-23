import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import questionsState from "../../stores/questions/atom";

const ActionButtons = () => {
  const params = useParams();
  const step = parseInt(params.step || "0", 10);
  const questions = useRecoilValue(questionsState);
  const isLast = questions.length - 1 === step;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
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
    </ActionButtonsWrapper>
  );
};

const ActionButtonsWrapper = styled.div``;

export default ActionButtons;
