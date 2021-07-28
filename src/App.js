import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import FriendList from './Components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      < Statistics title={'Upload stats'} stats={statisticalData} /> ;
      < Statistics stats={statisticalData} /> ;
      <FriendList friends={friends} /> ;
      <TransactionHistory items={ transactions }/>

    </>
      );
      
}

export default App;
