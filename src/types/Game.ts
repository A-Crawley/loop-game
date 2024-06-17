import { JobsType } from "./JobTypes";

export type Game = {
  date: string;
  age: number;
  jobs: JobsType[];
  currentJob: JobsType | null
  money: number
  income: number
  spend: number
};
