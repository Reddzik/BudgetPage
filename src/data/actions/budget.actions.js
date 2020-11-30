import {
  BUDGET_GET_REQUEST,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_FAILURE,
} from "data/constants";

import { fetchBudget } from "../actions/budget.actions";

export const getBudgetData = (id) => async (dispatch) => {
  dispatch({
    type: BUDGET_GET_REQUEST,
  });
  try {
    const response = await fetchBudget(id);
    const data = response.json();
    dispatch({
      type: BUDGET_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUDGET_GET_FAILURE,
    });
  }
};

const fetchBudgetedCategories = () => {};
