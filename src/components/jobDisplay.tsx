import { useDispatch, useSelector } from "react-redux";
import { Game } from "../types/Game";
import { useCallback, useMemo } from "react";
import ProgressBar from "./progressBar";
import { JobsType } from "../types/JobTypes";
import { setCurrentJob } from "../slice/gameTickSlice";

export const JobDisplay = ({
  jobId,
  onClick,
}: {
  jobId: number;
  onClick?: (job: JobsType | undefined) => void;
}) => {
  const dispatch = useDispatch();
  const { currentJob, jobs } = useSelector(
    (state: { gameTick: Game }) => state.gameTick,
  );

  const job = useMemo(() => jobs.find((j) => j.id === jobId), [jobs]);

  const isCurrent = useMemo(
    () => currentJob?.id === job?.id,
    [currentJob, job],
  );

  const jobName = useMemo(
    () => `${job?.name}: ${job?.level}`,
    [job?.name, job?.level],
  );

  const handleClick = useCallback(() => {
    console.log(jobName);
    dispatch(setCurrentJob({ jobId }));
    onClick?.(job);
  }, [job, jobName]);

  if (job?.isLocked) {
    return null;
  }

  return (
    <div onClick={handleClick} className="grid grid-cols-6">
      <div>
        <p>
          {job?.name}
          {isCurrent && <span>*</span>}
        </p>
      </div>
      <div className="col-span-4">
        <ProgressBar
          max={job?.experienceToNextLevel ?? 0}
          progress={job?.currentExperience ?? 0}
          animate
          innerText={jobName}
        />
      </div>
    </div>
  );
};
