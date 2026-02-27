import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
  color: #1f2328;
  font-size: 16px;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 { font-size: 2em; border-bottom: 1px solid #d1d9e0; padding-bottom: 10px; }
  h2 { font-size: 1.5em; border-bottom: 1px solid #d1d9e0; padding-bottom: 8px; }
  h3 { font-size: 1.25em; }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: 16px;
    padding-left: 2em;
  }

  li + li {
    margin-top: 4px;
  }

  blockquote {
    margin: 0 0 16px;
    padding: 0 1em;
    color: #636c76;
    border-left: 4px solid #d1d9e0;
  }

  code {
    padding: 2px 6px;
    font-size: 85%;
    background: #f0f0f0;
    border-radius: 4px;
    font-family: "SFMono-Regular", Consolas, monospace;
  }

  pre {
    margin-bottom: 16px;
    padding: 16px;
    background: #f6f8fa;
    border-radius: 6px;
    overflow-x: auto;

    code {
      padding: 0;
      background: none;
      font-size: 14px;
    }
  }

  hr {
    height: 1px;
    border: none;
    background: #d1d9e0;
    margin: 32px 0;
  }

  a {
    color: #0969da;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;

    th, td {
      padding: 8px 12px;
      border: 1px solid #d1d9e0;
    }

    th {
      background: #f6f8fa;
      font-weight: 600;
    }

    tr:nth-child(even) td {
      background: #f6f8fa;
    }
  }
`;

export default function MarkdownViewer({ content }) {
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
}
