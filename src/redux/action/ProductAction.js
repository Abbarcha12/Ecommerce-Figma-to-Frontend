import { ActionTypes } from "../contants/action-type"

export const setproducts = (products) => {
 return {
  type: ActionTypes.SET_PRODUCTS,
  payload: products
 }
}
export const selectedproduct = (product) => {
 return {
  type: ActionTypes.SELECTED_PRODUCTS,
  payload: product
 }
}