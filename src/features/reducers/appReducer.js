import { combineReducers } from "redux";
import cryptoReducer from "./cryptoReducer";
import samplePostReducer from "./samplePostReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers(
    {
        coins: cryptoReducer,
        userData: userReducer,
        posts: samplePostReducer
    }
)

export default appReducer;