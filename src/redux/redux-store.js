import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    usersPage:userReducer,
    auth: authReducer,
    app: appReducer,
    form:formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;

export default store;