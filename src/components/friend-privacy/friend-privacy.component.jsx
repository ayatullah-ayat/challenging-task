import React from 'react';

import './friend-privacy.styles.css'
function FriendPrivacy() {
  return (
    <div className="dropdown">
        <button className="dropbtn"><i className="fas fa-globe-americas"></i></button>
        <div className="dropdown-content">
            <a href="#">Private</a>
            <a href="#">Public</a>
            <a href="#">Only me</a>
        </div>
  </div>
  );
}

export default FriendPrivacy;
