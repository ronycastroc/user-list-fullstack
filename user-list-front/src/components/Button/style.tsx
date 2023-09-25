import styled from "styled-components";

export const ButtonContent = styled.button`
  padding: 8px 25px;
  background-color: #000;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }

  p{
    font-size: 0.9rem;
    color: #fff;
  }
`;