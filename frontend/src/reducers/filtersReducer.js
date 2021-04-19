import { UPDATE_BOUNDS } from "../actions/filterActions";

const defaultState = {
  bounds: {
    northEast: { lat: 37.80971, lng: -122.39208 },
    southWest: { lat: 37.74187, lng: -122.47791 },
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
