import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../path/user.json';
import data from '../path/data.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </>
  );
};
// export const Statistics = () => {
//   return (
//     <>
//       <Statistics stats={data} />
//     </>
//   );
// };
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
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
