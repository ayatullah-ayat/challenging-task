import React from 'react';

function FriendsTotal(props) {
  return (
   <div>
     <span><i className="fas fa-user-friends"></i> </span>
     <span>Friends </span>
     <span>{props.totalFriend}</span>
   </div>
  );
}

export default FriendsTotal;
