import { configureStore } from "@reduxjs/toolkit";
import gameTickReducer from "./slice/gameTickSlice";
import gameSpeedReducer from "./slice/gameSpeedSlice";

export default configureStore({
  reducer: {
    gameTick: gameTickReducer,
    gameSpeed: gameSpeedReducer,
  },
});
