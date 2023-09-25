import styled from "styled-components";

export const HeaderContent = styled.div`
  width: 100%;
  height: 80px;
  background-color: #545454;
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);

  img {
    width: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: black;
`;