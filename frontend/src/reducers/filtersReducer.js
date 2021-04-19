import { UPDATE_BOUNDS } from "../actions/filterActions";

const defaultState = {
  bounds: {
    northEast: { latitude: 37.80971, longitude: -122.39208 },
    southWest: { latitude: 37.74187, longitude: -122.47791 },
  },
};

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_BOUNDS:
      return {
        ...state,
        bounds: action.bounds,
      };
    default:
      return state;
  }
};

export default filtersReducer;
