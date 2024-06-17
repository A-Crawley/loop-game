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

  const handleClick = useCallback(() => {
    dispatch(setCurrentJob({ jobId }));
    onClick?.(job);
  }, [job]);

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
      <div>
        <p>{job?.level}</p>
      </div>
      <div className="col-span-2">
        <ProgressBar
          max={job?.experienceToNextLevel ?? 0}
          progress={job?.currentExperience ?? 0}
          animate
        />
      </div>
      <div>
        <p>{job?.baseSalary} p/d</p>
      </div>
      <div>
        <p>{job?.maxLevel}</p>
      </div>
    </div>
  );
};
