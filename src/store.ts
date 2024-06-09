import { configureStore } from "@reduxjs/toolkit";
import gameTickReducer from './slice/gameTickSlice'

export default configureStore({
  reducer: {
    gameTick: gameTickReducer,
  },
});
