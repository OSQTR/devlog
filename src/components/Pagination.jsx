import styled from "styled-components";
import { ArrowRightToLine, ChevronLeft, ChevronRight } from "lucide-react";

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 16px;
`;

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 100px;
  border: 1px solid #eee;
  gap: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: 1px solid #eee;
  border-radius: 50%;
  background: ${({ disabled }) =>
    disabled ? "transparent" : "rgba(255,255,255,0.5)"};
  color: ${({ disabled }) => (disabled ? "#ccc" : "#222")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: #e0e0e0;
  }
`;

const FAB = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49px;
  height: 49px;
  border: 1px solid #eee;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  color: ${({ disabled }) => (disabled ? "#ccc" : "#222")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: #e0e0e0;
  }
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #555555;
  min-width: 60px;
  text-align: center;
`;

export default function Pagination({ page, total, onChange }) {
  return (
    <Wrapper>
      <ContainerFlex>
        <ButtonContainer>
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
        </ButtonContainer>

        <FAB disabled={page === total - 1} onClick={() => onChange(total - 1)}>
          <ArrowRightToLine size={20} />
        </FAB>
      </ContainerFlex>
    </Wrapper>
  );
}
