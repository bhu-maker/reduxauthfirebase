import { combineReducers } from "redux";
import { SignupReducer } from "./SignupReducer"
 const reducer = combineReducers(
    {
        signup : SignupReducer
    }
)

export default reducer