import React, { Component } from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import { makeGetFriendsWithAgeLimit } from '../state/selector';
import FriendList from '../component/FriendList';
// import NumberSelect from "../component/NumberSelect";
// import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import { connect } from 'react-redux';

class FriendMain extends Component {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };

  render() {
    console.log('FriendMain render');
    const { friendsWithAgeLimit } = this.props;

    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <br />
        {this.props.ageLimit} :
        <FriendList friends={friendsWithAgeLimit} />
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getFriendsWithAgeLimit = makeGetFriendsWithAgeLimit();
  const mapStateToProps = (state, props) => {
    return {
      friendsWithAgeLimit: getFriendsWithAgeLimit(state, props),
    };
  };

  return mapStateToProps;
};

export default connect(makeMapStateToProps, actions)(FriendMain);
