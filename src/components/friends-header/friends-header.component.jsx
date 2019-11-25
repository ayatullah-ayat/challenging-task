import React from 'react';

import ManageFriends from '../manage-friends/manage-friends.component'
import FriendsTotal from '../friends-total/friends-total.component'
import FriendPrivacy from '../friend-privacy/friend-privacy.component'

import './friends-header.styles.css'
function FriendsHeader(props) {
  return (
   <div className="flex-header">
     <ManageFriends />
     <FriendsTotal totalFriend = {props.friendCount.length}/>
     <FriendPrivacy />
   </div>
  );
}

export default FriendsHeader;
