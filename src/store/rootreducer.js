import { combineReducers } from "redux";

import carrinhoReducer from './reducers/carrinho/slice'

const rootReducer = combineReducers({ carrinho: carrinhoReducer });

export default rootReducer