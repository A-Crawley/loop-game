const ProgressBar = ({
  max,
  progress,
  innerText,
  animate,
}: {
  max: number;
  progress: number;
  innerText?: string;
  animate?: boolean;
}) => {
  return (
    <div className="relative flex h-[24px] w-full items-center justify-center overflow-hidden rounded-lg border border-black/50">
      <div
        className="absolute left-0 top-0 h-full bg-green-200/50 transition-all ease-linear duration-100"
        style={{ width: `${animate ? (progress / max) * 100 : 100}%` }}
      ></div>
      <div>{innerText ?? ""}</div>
    </div>
  );
};

export default ProgressBar;
