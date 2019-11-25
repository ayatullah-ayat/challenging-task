import React from 'react'

import './friend-card.styles.css'

function FriendCard(props) {
    return(
        <div className="card">
            <img src={props.myFriend.imgUrl} />
            <h3>{ props.myFriend.name }</h3>
            <p>{ props.myFriend.mutual }</p>
            <button>unfollow</button>
        </div>
    )
}

export default FriendCard;