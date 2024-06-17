import { JobDisplay } from "../../jobDisplay";

export const BurgersAndFries = () => {
  return (
    <div className="h-full w-full">
      <div className="bg-yellow-300 p-2">
        <p className="font-black text-black">Burgers & Fries LTD</p>
      </div>
      <div className="flex flex-col gap-3 px-3 pt-2 text-center">
        <div className="grid grid-cols-6 border-b pb-1">
          <p>Name</p>
          <p>Current Level</p>
          <p className="col-span-2">Progress</p>
          <p>Money Per Day</p>
          <p>Max Level</p>
        </div>
        <JobDisplay jobId={1} />
        <JobDisplay jobId={2} />
        <JobDisplay jobId={3} />
        <JobDisplay jobId={4} />
        <JobDisplay jobId={5} />
        <JobDisplay jobId={6} />
        <JobDisplay jobId={7} />
        <JobDisplay jobId={8} />
        <JobDisplay jobId={9} />
      </div>
    </div>
  );
};
