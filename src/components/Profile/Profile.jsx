import PropTypes from 'prop-types';
import {
  Box,
  CardInfo,
  ListInfo,
  ListItem,
  Avatar,
  UserName,
  Tag,
  Location,
  UserStat,
} from './Profile.styled';
export const Profile = ({ avatar, location, stats, tag, username }) => {
  return (
    <Box>
      <CardInfo>
        <Avatar src={avatar} alt={username} avatar />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </CardInfo>

      <ListInfo>
        <ListItem>
          <span>Followers</span>
          <UserStat>{stats.followers}</UserStat>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <UserStat>{stats.views}</UserStat>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <UserStat>{stats.likes}</UserStat>
        </ListItem>
      </ListInfo>
    </Box>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
