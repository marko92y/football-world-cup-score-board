import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import scoreBoardReducer from "./ScoreBoardSlice";

export const store = configureStore({
  reducer: {
    scoreBoard: scoreBoardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
