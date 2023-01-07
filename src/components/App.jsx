import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../path/user';
import data from '../path/data';
import friends from '../path/friends';
import transactions from '../path/transactions';
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
// Profile PropTypes
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
// Statistics PropTypes
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
// FriendsList PropTypes
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
