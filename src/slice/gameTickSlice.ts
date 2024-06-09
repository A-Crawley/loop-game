import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { Game } from "../types/Game";
import { Jobs } from "../types/Jobs";
import { JobsType } from "../types/JobTypes";

const state: Game = {
  date: moment({ date: 7, month: 5, year: 1950 }).toISOString(),
  age: 12,
  jobs: Jobs,
  currentJob: null,
  money: 0,
};

const checkUnlocks = (jobs: JobsType[]) => {
  if (jobs.find((job) => job.id === 1)?.level === 10) {
    jobs.find((job) => job.id === 2)!.isLocked = false;
  }
};

export const gameTickSlice = createSlice({
  name: "gameTick",
  initialState: state,
  reducers: {
    incrementDate: (state) => {
      state.date = moment(state.date).add(1, "day").toISOString();
      if (moment(state.date).date() === 3 && moment(state.date).month() === 5)
        state.age += 1;
    },
    setCurrentJob: (state, action: { payload: { jobId: number } }) => {
      const newJob = state.jobs.find((j) => j.id === action.payload.jobId);
      if (!newJob) return;
      state.currentJob = newJob;
    },
    incrementJob: (state) => {
      if (!state.currentJob) return;
      if (
        state.currentJob.currentExperience + 1 >
        state.currentJob.experienceToNextLevel
      ) {
        state.currentJob.currentExperience = 0;

        state.currentJob.baseSalary = Number(
          Number(
            state.currentJob.baseSalary *
              state.currentJob.levelSalaryMultiplier,
          ).toFixed(2),
        );

        state.currentJob.experienceToNextLevel = Number(
          Number(
            state.currentJob.experienceToNextLevel *
              state.currentJob.levelExperienceMultiplier,
          ).toFixed(2),
        );

        state.currentJob.level += 1;
      } else {
        state.currentJob.currentExperience += 1;
      }

      state.currentJob.currentSalary = Number(
        Number(
          state.currentJob.baseSalary + state.currentJob.currentSalary,
        ).toFixed(2),
      );

      state.jobs = [
        ...state.jobs.filter((j) => j.id !== state.currentJob?.id),
        { ...state.currentJob },
      ];

      checkUnlocks(state.jobs);
    },
    incrementMoney: (state) => {
      state.money = Number(
        Number(state.money + (state.currentJob?.baseSalary ?? 0)).toFixed(2),
      );
    },
  },
});

export const { incrementDate, incrementJob, setCurrentJob, incrementMoney } =
  gameTickSlice.actions;

export default gameTickSlice.reducer;
