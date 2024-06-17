import { createSlice } from "@reduxjs/toolkit";

export const gameSpeedSlice = createSlice({
  name: "gameSpeed",
  initialState: {
    speed: 150,
  },
  reducers: {
    changeSpeed: (state, action: { payload: { gameSpeed: number } }) => {
      state.speed = action.payload.gameSpeed;
    },
  },
});

export const { changeSpeed } = gameSpeedSlice.actions;

export default gameSpeedSlice.reducer;
