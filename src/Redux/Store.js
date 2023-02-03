import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/AuthReducer";

const Reducer = combineReducers({
	auth: AuthReducer,
});

export const store = createStore(Reducer, applyMiddleware(thunk));
store.subscribe(() => {
	console.log(store.getState());
});
