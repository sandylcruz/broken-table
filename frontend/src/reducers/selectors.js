import { createSelector } from "reselect";

// const mySelector = createSelector(
//   (state) => 1,
//   (state) => 2,
//   (state) => 3,
//   (one, two, three) => one + two + three
// );

export const selectCurrentUser = createSelector(
  (state) => {
    const currentUserId = state.session.id;

    if (!currentUserId) {
      return null;
    }

    return state.entities.users[currentUserId];
  },
  (currentUser) => currentUser
);

export const selectUsers = () => {};
