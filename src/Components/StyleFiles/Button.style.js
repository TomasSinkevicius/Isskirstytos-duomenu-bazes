import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'

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

export const ButtonLabel = styled.a`
  font-size: 18px;
  color: white;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }
`;