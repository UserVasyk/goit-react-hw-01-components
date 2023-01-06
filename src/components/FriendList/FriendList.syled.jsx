import styled from '@emotion/styled';

export const IsOnline = styled.span`
  display: inline-block;
  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const ItemFriend = styled.li`
  width: 300px;
  height: 80px;
  padding: 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;
export const ListFriends = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
export const NameFriend = styled.p`
  font-size: 25px;
`;
