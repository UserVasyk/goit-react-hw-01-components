import styled from '@emotion/styled';

export const Title = styled.h2`
  background-color: #fff;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #283446;
`;

export const Section = styled.section`
  width: 450px;
`;
export const ListStats = styled.ul`
  display: flex;
`;
export const ItemStat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: calc(100% / 5);
  height: 70px;
  :nth-of-type(1) {
    background-color: #009aff;
  }
  :nth-of-type(2) {
    background-color: #ffbe52;
  }
  :nth-of-type(3) {
    background-color: #ca79db;
  }
  :nth-of-type(4) {
    background-color: #00ffee;
  }
  :nth-of-type(5) {
    background-color: #ff2616;
  }
  span:nth-of-type(2) {
    font-size: 25px;
  }
`;
