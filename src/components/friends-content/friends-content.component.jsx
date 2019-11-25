import React from 'react'

import FriendCard from '../friend-card/friend-card.component'
import './friends-content.styles.css'

function FriendsContent(props) {
    return(
        <div className = "friends-card">
            {props.myFriends.map(myFriend => {
                return(<FriendCard key={myFriend.id} myFriend = {myFriend}/>)
            })}
        </div>
    )
}

export default FriendsContent;