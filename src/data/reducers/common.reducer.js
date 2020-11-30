import {
  CATEGORIES_GET,
  CATEGORIES_GET_REQUEST,
  CATEGORIES_GET_FAILURE,
  CATEGORIES_GET_SUCCESS,
  LOADING_STATES,
} from "data/constants";

const initialState = {
  loadingState: {},
  allCategories: [],
};

function common(state = initialState, action) {
  const newloadingState = { ...state.loadingState };
  switch (action.type) {
    case CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case CATEGORIES_GET_SUCCESS:
      delete newloadingState.CATEGORIES_GET_REQUEST;
      return {
        ...state,
        loadingState: newloadingState,
        allCategories: action.payload,
      };
    case CATEGORIES_GET_FAILURE:
      delete newloadingState.CATEGORIES_GET_REQUEST;
      return {
        loadingState: newloadingState,
        allCategories: [],
      };
    default:
      return state;
  }
}
