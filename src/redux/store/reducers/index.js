import { combineReducers } from "redux";
import builderReducer from "./builderReducer";

const rootReducer = combineReducers({
  builder: builderReducer,
  // Add other reducers if you have any
});

export default rootReducer;
