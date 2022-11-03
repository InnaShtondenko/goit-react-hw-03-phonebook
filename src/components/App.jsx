import  userData  from 'data/user.json';
import statisticsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionData from 'data/transactions.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticsData} />
      <Statistics stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </ThemeProvider>
  );
};