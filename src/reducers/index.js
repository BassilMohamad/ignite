import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReduser from "./detailReduser";
const rootRueducer=combineReducers({
  games:gamesReducer,
  detail:detailReduser
});
export default rootRueducer;