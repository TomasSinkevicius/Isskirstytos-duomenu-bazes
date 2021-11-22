import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  table {
    margin-right: 10px;
  }
`;

export const Table = styled.table`
  outline: thin;
  outline-color: white;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  td {
    border: 1px solid black;
  }
  
`;

export const INPUT = styled.input`
  margin-top: 5px;
  align-self: center;
  display: table-cell;
`;
export const TR = styled.tr`
  background-color: #009879;
  color: black;
  text-align: left;
  word-wrap: break-all;
  width: auto;

  :nth-child(odd){
    background-color: white;
  }
  :nth-child(even){
    background-color: #CDC9A5;
  }
`;
export const GridDiv = styled.div`
  display: grid;
  padding: 10px;
  align-self: center;
  align-items: center;
  text-align: center;
  margin-top: 5px;
`;

export const Form = styled.form`
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-top: 5px;
`;

export const PopForm = styled.form`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-top: 5px;
`;
