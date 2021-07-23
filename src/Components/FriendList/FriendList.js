import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({friends}) {
    return <ul className={s.list}>
        {friends.map(friend => (<FriendListItem avatar={ friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />))} 
          </ul>
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default FriendList;

 