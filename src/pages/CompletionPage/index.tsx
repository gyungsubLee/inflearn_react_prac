import styled from "styled-components";

const a = 123;

const CompletionPage = () => {
  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
};

const CompletionPageWrapper = styled.div`
  background: aqua;
  padding: ${a === 123 ? "4em" : "1em"};
`;

export default CompletionPage;
