import renderReducer from "./render/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  render: renderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
