import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 12px;
`;

export default function Pagination({ page, total, onChange }) {
  return (
    <Wrapper>
      <Button disabled={page === 0} onClick={() => onChange(page - 1)}>
        Prev
      </Button>

      <span>
        {page + 1} / {total}
      </span>

      <Button disabled={page === total - 1} onClick={() => onChange(page + 1)}>
        Next
      </Button>
    </Wrapper>
  );
}
