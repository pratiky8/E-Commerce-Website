import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./products/Reducer";
import cartReducer from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";

const rootReducer = combineReducers({

    auth: authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer

})

 export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


