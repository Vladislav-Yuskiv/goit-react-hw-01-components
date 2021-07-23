import PropTypes from 'prop-types';
import s from './Profile.module.css';
import imageDefault from './user.png' 


function Profile({ name, tag, location, avatar = imageDefault , stats }) {
  
  return <div className={s.profile}>
  <div className={s.description}>
        <img
          src={avatar}
          alt={name}
          className={s.avatar}
    />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
  </div>
        <div className={s.list}>
      <ul className={s.stats}>
    <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Likes</span>
       <span className={s.quantity}>{stats.likes}</span>
    </li>
              </ul>
              </div>
</div>
}

Profile.propTypes = {
    name: PropTypes.string.isRequired ,
    tag:  PropTypes.string ,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired
}
export default Profile;