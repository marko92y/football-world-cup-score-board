import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "./store";

export interface ScoreBoard {
  scoreBoard?: {
    homeTeam: string;
    homeTeamScore: number;
    awayTeam: string;
    awayTeamScore: number;
    startedTime: number;
    id: string;
  }[];
}

const initialState: ScoreBoard = {
  scoreBoard: [
    {
      homeTeam: "Mexico",
      homeTeamScore: 0,
      awayTeam: "Canada",
      awayTeamScore: 5,
      startedTime: 0,
      id: uuidv4(),
    },
    {
      homeTeam: "Spain",
      homeTeamScore: 10,
      awayTeam: "Brazil",
      awayTeamScore: 2,
      startedTime: 0,
      id: uuidv4(),
    },
    {
      homeTeam: "Germany",
      homeTeamScore: 2,
      awayTeam: "France",
      awayTeamScore: 2,
      startedTime: 0,
      id: uuidv4(),
    },
    {
      homeTeam: "Uruguay",
      homeTeamScore: 6,
      awayTeam: "Italy",
      awayTeamScore: 6,
      startedTime: 0,
      id: uuidv4(),
    },
    {
      homeTeam: "Argentina",
      homeTeamScore: 3,
      awayTeam: "Australia",
      awayTeamScore: 1,
      startedTime: 0,
      id: uuidv4(),
    },
  ],
};

export const scoreBoardSlice = createSlice({
  name: "scoreBoard",
  initialState,

  reducers: {
    addGameAdmin: (
      state,
      action: PayloadAction<{
        homeTeam: string;
        awayTeam: string;
        homeTeamScore: number;
        awayTeamScore: number;
      }>
    ) => {
      state.scoreBoard?.push({
        ...action.payload,
        id: uuidv4(),
        startedTime: Date.now(),
      });
    },
    homeTeamScored: (state, action: PayloadAction<{ id: string }>) => {
      state.scoreBoard?.map(
        (e) => e.id === action.payload.id && e.homeTeamScore++
      );
    },
    awayTeamScored: (state, action: PayloadAction<{ id: string }>) => {
      state.scoreBoard?.map(
        (e) => e.id === action.payload.id && e.awayTeamScore++
      );
    },
    deleteGame: (state, action: PayloadAction<{ id: string }>) => {
      state.scoreBoard = state.scoreBoard?.filter(
        (e) => e.id !== action.payload.id
      );
    },
  },
});

export const { addGameAdmin, homeTeamScored, awayTeamScored, deleteGame } =
  scoreBoardSlice.actions;

export const selectScoreBoard = (state: RootState) =>
  state.scoreBoard.scoreBoard;

export default scoreBoardSlice.reducer;
