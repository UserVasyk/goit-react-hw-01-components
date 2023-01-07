import styled from '@emotion/styled';

export const Table = styled.table`
  width: 550px;
  border-collapse: collapse;
  th {
    width: calc(100% / 3);
    border: 1px solid #2a2a2a50;
  }
  td {
    height: 50px;
    border: 1px solid #2a2a2a50;
    text-align: center;
  }
  tr {
    height: 50px;
  }
  thead tr {
    background-color: #62acf3;
  }
`;

export const BodyTable = styled.tbody`
  tr:nth-of-type(2n) {
    background-color: #e7e7e7;
  }

  tr:nth-of-type(2n + 1) {
    background-color: #fff;
  }
`;
