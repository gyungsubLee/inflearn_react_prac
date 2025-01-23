import { useParams } from "react-router-dom";

import ProgressIndicator from "../../components/ProgressIndicator";
import QuestionBox from "../../components/QuestionBox";

const SurveyPage = () => {
  return (
    <div>
      <ProgressIndicator />
      <QuestionBox />
    </div>
  );
};

export default SurveyPage;
