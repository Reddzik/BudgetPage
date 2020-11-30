import {
  BUDGET_GET,
  BUDGET_GET_REQUEST,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_FAILURE,
  LOADING_STATES,
} from "data/constants";

const initialState = {
  loadingState: {},
  budget: {},
  budgetedCategories: [],
};

function budget(state = initialState, action) {
  const newLoadingState = { ...state.loadingState }; //this is new object, not just reference! so our budgetReducer still will be unmuted.

  switch (action.type) {
    case BUDGET_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case BUDGET_GET_SUCCESS:
      delete newLoadingState.BUDGET_GET_REQUEST;
      return {
        ...state,
        budget: action.payload,
        loadingState: newLoadingState,
        //if there isn't such object like loadingState.BUDGET_GET_REQUEST you can display state :)
      };
    case BUDGET_GET_FAILURE:
      delete newLoadingState.BUDGET_GET_REQUEST;
      return {
        ...state,
        budget: initialState.budget,
        loadingState: newLoadingState,
      };
    default:
      return state;
  }
}

export default budget;
