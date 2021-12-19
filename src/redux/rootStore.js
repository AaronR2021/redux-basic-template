import { combineReducers } from "redux";
import cakeReducer from './cakes/cakesReducer';
import icecreamReducer from './icecream/icecreamReducer'
export const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})