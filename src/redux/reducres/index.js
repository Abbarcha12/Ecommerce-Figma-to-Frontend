import { combineReducers } from "redux"
import { productReducre } from "./productReducre"


export const reducres = combineReducers({
 allProducts: productReducre,
})

