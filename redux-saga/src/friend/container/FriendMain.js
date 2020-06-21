import React, { useState, useEffect } from 'react';
import store from '../../common/store';
import { getNextFriend } from '../../common/mockData';
import { addFriend } from '../state';
import FriendList from '../component/FriendList';

const FriendMain = () => {
  const [timelines, setTimelines] = useState(store.getState().friend.friends);
  useEffect(() => {
    return store.subscribe(() => setTimelines(store.getState().friend.friends));
  }, [timelines]);

  const onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  };

  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={timelines} />
    </div>
  );
};

export default FriendMain;

// export default class FriendMain extends PureComponent {
//   state = {
//     friends: store.getState().friend.friends,
//   };

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() =>
//       this.setState({
//         friends: store.getState().friend.friends,
//       })
//     );
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   onAdd = () => {
//     const friend = getNextFriend();
//     store.dispatch(addFriend(friend));
//   };

//   render() {
//     console.log('FriendMain render');

//     return (
//       <div>
//         <button onClick={this.onAdd}>친구 추가</button>
//         <FriendList friends={this.state.friends} />
//       </div>
//     );
//   }
// }
