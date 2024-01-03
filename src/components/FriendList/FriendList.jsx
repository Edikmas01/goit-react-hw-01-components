import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css'

export const FriendList = ({ friends }) => {
    return (
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="friend-item">
            <span
              className="status"
              style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt={`${friend.name} avatar`}
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    );
}

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


// friend.isOnline
//     ? (style = { backgroundColor: 'green' })
//      : (style = { backgroundColor: 'red' });