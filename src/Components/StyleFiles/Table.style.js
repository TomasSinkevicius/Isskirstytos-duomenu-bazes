import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  table {
    margin-right: 10px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  td {
    border: 1px solid black;
  }
`;

export const TR = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

export const Form = styled.form`
  width: 20%;
  margin-left: auto;
  margin-right: auto;
`;

export const GridDiv = styled.div`
  display: grid;
  padding: 10px;
  align-self: center;
`;
