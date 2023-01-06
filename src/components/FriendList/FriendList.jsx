import PropTypes from 'prop-types';
import {
  IsOnline,
  ListFriends,
  ItemFriend,
  NameFriend,
} from './FriendList.syled';
export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <ItemFriend key={id}>
          <IsOnline isOnline={isOnline}></IsOnline>
          <img src={avatar} alt={name} width="48" />
          <NameFriend>{name}</NameFriend>
        </ItemFriend>
      ))}
    </ListFriends>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
