import { JobsType } from "./JobTypes";

export const Jobs: JobsType[] = [
  {
    id: 1,
    LifeStyle: "Burgers & Fries LTD",
    name: "Trainee",
    isLocked: false,
    level: 1,
    currentExperience: 0,
    currentSalary: 0,
    experienceToNextLevel: 60,
    baseSalary: 1,
    levelSalaryMultiplier: 1.05,
    levelExperienceMultiplier: 1.03,
  },
  {
    id: 2,
    LifeStyle: "Burgers & Fries LTD",
    name: "Burger Flipper",
    isLocked: true,
    level: 1,
    currentExperience: 0,
    currentSalary: 0,
    experienceToNextLevel: 80,
    baseSalary: 1.4,
    levelSalaryMultiplier: 1.07,
    levelExperienceMultiplier: 1.07,
  },
] as const;
