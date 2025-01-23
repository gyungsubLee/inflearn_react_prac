import styled from "styled-components";
import { useRecoilValue } from "recoil";
import testWithComma from "../../stores/test/testWithComma";

const CompletionPage = () => {
  const test = useRecoilValue(testWithComma);
  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
};

const CompletionPageWrapper = styled.div``;

export default CompletionPage;
