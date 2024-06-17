export type JobsType = {
  id: number;
  LifeStyle: string;
  name: string;
  isLocked: boolean;
  level: number;
  maxLevel: number;
  currentExperience: number;
  currentSalary: number;
  experienceToNextLevel: number;
  baseSalary: number;
  levelSalaryMultiplier: number;
  levelExperienceMultiplier: number;
};
