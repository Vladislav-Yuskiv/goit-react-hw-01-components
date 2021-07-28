import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import imageDefault from './user.png' 

function FriendListItem({ avatar=imageDefault, name, isOnline='false' }) {
    return (< li  className={s.item} >
                    < span className={s.status} style={{ backgroundColor : isOnline ? 'green' : 'red'}}  > </ span >
                    < img className={s.avatar} src = {avatar} alt = {name} width = " 48 " />
                    < p className={s.name} > {name} </ p >
            </ li >
 )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool
    
}
export default FriendListItem;