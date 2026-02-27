import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-top: 1px solid #e5e5e5;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: ${({ disabled }) => (disabled ? "transparent" : "#f0f0f0")};
  color: ${({ disabled }) => (disabled ? "#ccc" : "#222")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: #e0e0e0;
  }
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #555;
  min-width: 60px;
  text-align: center;
`;

export default function Pagination({ page, total, onChange }) {
  return (
    <Wrapper>
      <IconButton disabled={page === 0} onClick={() => onChange(page - 1)}>
        <ChevronLeft size={20} />
      </IconButton>

      <PageInfo>
        {page + 1} / {total}
      </PageInfo>

      <IconButton
        disabled={page === total - 1}
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight size={20} />
      </IconButton>
    </Wrapper>
  );
}
