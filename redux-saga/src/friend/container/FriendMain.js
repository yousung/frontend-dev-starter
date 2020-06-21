import React, { PureComponent } from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import { connect } from 'react-redux';

class FriendMain extends PureComponent {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };

  render() {
    console.log('FriendMain render');
    const { friends } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <FriendList friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { friends: state.friend.friends };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFriend: (friend) => {
//       dispatch(addFriend(friend));
//     },
//   };
// };

export default connect(mapStateToProps, actions)(FriendMain);
