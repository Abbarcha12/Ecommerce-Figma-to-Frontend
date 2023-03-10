import { ActionTypes } from "../contants/action-type";

const initialState = {
  products: []
}

export const productReducre = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
}