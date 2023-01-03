import styled from "styled-components";

export const Container = styled.div `
  min-height: 79vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222831;
  color: #FFF;
  padding: 4px;
`;

export const Title = styled.h1 `
  margin-bottom: 14px;
`;

export const Form = styled.form `
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input `
  margin-bottom: 14px;
  height: 34px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;
`;

export const TextArea = styled.textarea `
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
  padding: 8px;
  height: 94px;
  resize: none;
`;

export const Button = styled.input `
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: #2ecc71;
  font-size: 18px;
  transition: background-color, transform 0.8s;

  :hover {
    background-color: #2ecc72;
    transform: scale(1.01);
  }

`;