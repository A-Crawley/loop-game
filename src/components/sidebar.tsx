import { useSelector } from "react-redux";
import ProgressBar from "./progressBar";
import moment from "moment";
import { Game } from "../types/Game";
import { useMemo } from "react";

const Sidebar = () => {
  const { date, age, currentJob, money } = useSelector(
    (state: { gameTick: Game }) => state.gameTick,
  );

  const jobName = useMemo(
    () => `${currentJob?.name}: ${currentJob?.level}`,
    [currentJob?.name, currentJob?.level],
  );

  const renderMoney = useMemo(() => <span>{Math.floor(money)}</span>, [money]);

  return (
    <div className="h-full w-[300px] rounded-lg bg-zinc-500 p-3">
      <div className="w-full justify-items-start">
        <p className="">Date: {moment(date).format("DD / MM / YYYY")}</p>
      </div>
      <div>
        <p>Age: {age}</p>
      </div>
      <div>Perusing Lifestyle: {currentJob?.LifeStyle}</div>
      <div>Money: {renderMoney}</div>
      <div>
        <ProgressBar
          max={currentJob?.experienceToNextLevel ?? 0}
          progress={currentJob?.currentExperience ?? 0}
          animate
          innerText={jobName}
        />
      </div>
    </div>
  );
};

export default Sidebar;
