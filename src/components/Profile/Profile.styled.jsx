import styled from '@emotion/styled';
export const Box = styled.div`
  background-color: #e1e1e1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const CardInfo = styled.div`
  background-color: #fff;
  margin-top: 15px;
  width: 350px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ListInfo = styled.ul`
  width: 350px;
  background-color: #e4ebf7;
  display: flex;
`;
export const ListItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #8d8d8d;
  padding: 20px 10px;
  gap: 8px;
`;
export const Avatar = styled.img`
  width: 150px;
  margin-bottom: 25px;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
`;
export const Tag = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  color: #1c1c1c;
`;
export const Location = styled.p`
  font-size: 18px;
  color: #1c1c1c;
`;
export const UserStat = styled.span`
  font-weight: 700;
`;
