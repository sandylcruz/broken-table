import {
  RECEIVE_RESERVATION,
  UNRECEIVE_RESERVATION,
} from "../actions/reservationActions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESERVATION: {
      return {
        ...state,
        [action.currentUser.id]: {
          ...action.currentUser,
          isCurrentUser: true,
        },
      };
    }
    case UNRECEIVE_RESERVATION: {
      const { restaurantId, userId } = action;

      return {
        ...state,
        [userId]: {
          ...state[userId],
          reservationIds: state[userId].reservationIds.filter(
            (id) => id !== restaurantId
          ),
        },
      };
    }
    default:
      return state;
  }
};

export default reservationsReducer;
