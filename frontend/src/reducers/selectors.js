import { createSelector } from "reselect";

export const selectErrors = createSelector(
  (state) => state.errors,
  (errors) => errors
);

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
