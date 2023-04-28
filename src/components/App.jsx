import Profile from "./Profil/profile"
import Statistics from './Statistics/statistic-list'
import FriendList from "./FriendList/friend-list"
import TransactionsHistory from "./TransactionHistory/transaction-history"

import user from '../data/user.json'
import stats from '../data/statistics.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
        />
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />
        <FriendList allFriends={friends} />
        <TransactionsHistory items={ transactions } />
    </div>
  );
};
