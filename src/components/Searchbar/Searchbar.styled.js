import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blueviolet;
  padding: 16px;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;
