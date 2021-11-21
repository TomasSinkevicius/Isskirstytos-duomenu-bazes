import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  margin: 0 auto;
  text-decoration: none;
  align-items: center;  
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  &:hover {
    background-color: coral;
  }

  background-color: ${(props) => props.backgroundColor};
`;

export const ButtonLabel = styled.label`
  font-size: 18px;
  color: white;
`
