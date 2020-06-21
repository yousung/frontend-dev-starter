import React, { PureComponent } from 'react';
import { getNextFriend } from '../../common/mockData';
import * as actions from '../state';
import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import { connect } from 'react-redux';

class FriendMain extends PureComponent {
  onAdd = () => {
    const friend = getNextFriend();
    this.props.addFriend(friend);
  };

  render() {
    console.log('FriendMain render');
    const {
      friendsWithAgeLimit,
      firendsWithAgeShowLimit,
      ageLimit,
      showLimit,
      setAgeLimit,
      setShowLimit,
    } = this.props;
    return (
      <div>
        <button onClick={this.onAdd}>친구 추가</button>
        <NumberSelect
          onChange={setAgeLimit}
          value={ageLimit}
          options={ageLimitOptions}
          postfix='세 이하만 보기'
        />
        <FriendList friends={friendsWithAgeLimit} />

        <NumberSelect
          onChange={setShowLimit}
          value={showLimit}
          options={showLimitOptions}
          postfix='명 이하만 보기 (연령제한 적용)'
        />
        <FriendList friends={firendsWithAgeShowLimit} />
      </div>
    );
  }
}

const ageLimitOptions = [15, 20, 25, MAX_AGE_LIMIT];
const showLimitOptions = [2, 4, 6, MAX_SHOW_LIMIT];

const mapStateToProps = (state) => {
  const { friends, ageLimit, showLimit } = state.friend;
  const friendsWithAgeLimit = friends.filter(
    (friend) => friend.age <= ageLimit
  );
  const firendsWithAgeShowLimit = friendsWithAgeLimit.slice(0, showLimit);

  return { friendsWithAgeLimit, firendsWithAgeShowLimit, ageLimit, showLimit };
};

export default connect(mapStateToProps, actions)(FriendMain);
