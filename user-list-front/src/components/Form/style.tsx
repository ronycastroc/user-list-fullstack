import styled from "styled-components";

export const FormContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  row-gap: 10px;

  label {
    font-size: 0.95rem;
  }

  input {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  ::placeholder {
    font-size: 0.9rem;
  }
`;