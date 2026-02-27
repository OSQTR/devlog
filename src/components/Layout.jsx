import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
