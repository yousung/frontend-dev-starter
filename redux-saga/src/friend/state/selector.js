import { createSelector } from "reselect";

export const getFriends = (state, props) => state.friend.friends;
export const getAgeLimit = (state, props) => props.ageLimit;
// export const getShowLimit = (state) => state.friend.showLimit;

export const makeGetFriendsWithAgeLimit = () => {
  return createSelector([getFriends, getAgeLimit], (friedns, ageLimit) =>
    friedns.filter((friend) => friend.age <= ageLimit)
  );
};
