import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./progressBar";
import moment from "moment";
import { Game } from "../types/Game";
import { ButtonHTMLAttributes, useCallback, useMemo, useState } from "react";
import { changeSpeed } from "../slice/gameSpeedSlice";

const Button = (props: ButtonHTMLAttributes<unknown>) => {
  return (
    <button
      {...props}
      className="rounded border border-white bg-black/30 px-2 pb-1"
    >
      {props.children}
    </button>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isPaused, setIsPaused] = useState(false);
  const { date, age, currentJob, money, income, spend } = useSelector(
    (state: { gameTick: Game }) => state.gameTick,
  );

  const jobName = useMemo(
    () => `${currentJob?.name}: ${currentJob?.level}`,
    [currentJob?.name, currentJob?.level],
  );

  const renderMoney = useMemo(() => <span>{Math.floor(money)}</span>, [money]);
  const renderIncome = useMemo(() => <span>{income}</span>, [income]);
  const renderSpend = useMemo(() => <span>{spend}</span>, [spend]);

  const handlePause = useCallback(() => {
    if (isPaused) {
      console.log("Resume", isPaused);
      setIsPaused(false);
      dispatch(changeSpeed({ gameSpeed: 250 }));
    } else {
      console.log("Pause", isPaused);
      setIsPaused(true);
      dispatch(changeSpeed({ gameSpeed: 0 }));
    }
  }, [isPaused]);

  const handleIncreaseSpeed = useCallback(
    (amount: number) => dispatch(changeSpeed({ gameSpeed: amount })),
    [],
  );

  return (
    <div className="flex h-full w-[300px] flex-col gap-3 rounded-lg bg-zinc-500 p-3">
      <div className="flex justify-between">
        <div>
          <Button onClick={handlePause}>Pause/Play</Button>
        </div>
        <div>
          <Button onClick={() => handleIncreaseSpeed(100)}>{">"}</Button>
          <Button onClick={() => handleIncreaseSpeed(50)}>{">>"}</Button>
          <Button onClick={() => handleIncreaseSpeed(25)}>{">>>"}</Button>
        </div>
      </div>
      <div>
        <p className="flex justify-between">
          <span>Date:</span>
          <span>{moment(date).format("DD / MM / YYYY")}</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between">
          <span>Age:</span>
          <span>{age}</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between">
          <span>Lifestyle:</span>
          <span>{currentJob?.LifeStyle}</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between">
          <span>Money:</span>
          <span>{renderMoney}</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between">
          <span>Income:</span>
          <span>{renderIncome}</span>
        </p>
      </div>
      <div>
        <p className="flex justify-between">
          <span>Spend:</span>
          <span>{renderSpend}</span>
        </p>
      </div>
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
