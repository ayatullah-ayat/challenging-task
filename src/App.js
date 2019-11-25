import React from 'react';
import './App.css';
import FriendsHeader from './components/friends-header/friends-header.component';
import FriendsContent from './components/friends-content/friends-content.component';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myFriends: [
        {
          id: 1,
          name: "Arifullah",
          mutual: '1',
          imgUrl: "http://www.i2clipart.com/cliparts/0/1/a/a/clipart-cartoon-wolf-256x256-01aa.png"
        },
        {
          id: 2,
          name: "Brad",
          mutual: '1',
          imgUrl: "http://www.i2clipart.com/cliparts/0/1/a/a/clipart-cartoon-wolf-256x256-01aa.png"
        },
        {
          id: 3,
          name: "Williamson",
          mutual: '2',
          imgUrl: "http://www.i2clipart.com/cliparts/0/1/a/a/clipart-cartoon-wolf-256x256-01aa.png"
        },
        {
          id: 4,
          name: "John",
          mutual: 3,
          imgUrl: "http://www.i2clipart.com/cliparts/0/1/a/a/clipart-cartoon-wolf-256x256-01aa.png"
        },
        {
          id: 5,
          name: "Coen",
          mutual: 1,
          imgUrl: "http://www.i2clipart.com/cliparts/0/1/a/a/clipart-cartoon-wolf-256x256-01aa.png"
        },
        {
          id: 6,
          name: "Angelina",
          mutual: 1,
          imgUrl: "http://www.i2clipart.com/cliparts/0/1/a/a/clipart-cartoon-wolf-256x256-01aa.png"
        }
      ]
    }
  }
  render() {
    return (
      <div className= "App">
        <FriendsHeader friendCount = {this.state.myFriends}/>
        <FriendsContent myFriends = {this.state.myFriends}/>
      </div>
     );
  }
}

export default App;
