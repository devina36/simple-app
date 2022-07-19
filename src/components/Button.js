import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border-radius: 0.5 0 0 0;
  color: var(--mainBlue);
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`;
