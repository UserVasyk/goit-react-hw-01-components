import PropTypes from 'prop-types';
import { IsOnline, ItemFriend, NameFriend } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <ItemFriend>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img src={avatar} alt={name} width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemFriend>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
