import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./components/home";
import Topbar from "./components/topbar";
import { useCallback, useEffect, useState } from "react";
import {
  incrementDate,
  incrementJob,
  incrementMoney,
  setCurrentJob,
} from "./slice/gameTickSlice";
import { Game } from "./types/Game";
import { JobsType } from "./types/JobTypes";

function App() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state: { gameTick: Game }) => state.gameTick);
  const [showDebug, setShowDebug] = useState(false);
  const { speed } = useSelector(
    (state: { gameSpeed: { speed: number } }) => state.gameSpeed,
  );

  useEffect(() => {
    console.log("hi", speed);
    if (speed === 0) {
      return;
    }
    let interval = 0;
    interval = setInterval(() => {
      dispatch(incrementDate());
      dispatch(incrementJob());
      dispatch(incrementMoney());
    }, speed);
    console.log("created interval", interval);

    return () => {
      console.log("removed interval", interval);
      clearInterval(interval);
    };
  }, [speed]);

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full flex-col">
        <div className="h-[50px] w-full">
          <Topbar />
        </div>
        <div className="w-full flex-grow">
          <Home />
        </div>
      </div>
      {showDebug && (
        <div className="absolute bottom-10 right-10">
          <button
            onClick={() => setShowDebug(false)}
            type="button"
            className="border bg-white px-2 text-black"
          >
            \/
          </button>
          <div className="h-[600px] overflow-scroll border bg-white p-4 text-black">
            {jobs.map((job) =>
              Object.keys(job).map((key) => (
                <p>
                  <span>{key}: </span>
                  <span>{job[key as keyof JobsType].toString()}</span>
                </p>
              )),
            )}
          </div>
        </div>
      )}
      {!showDebug && (
        <button
          onClick={() => setShowDebug(true)}
          type="button"
          className="absolute bottom-10 right-10 border bg-white px-2 text-black"
        >
          /\
        </button>
      )}
    </div>
  );
}

export default App;
