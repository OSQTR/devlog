import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
`;

export default function MarkdownViewer({ content }) {
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
}
