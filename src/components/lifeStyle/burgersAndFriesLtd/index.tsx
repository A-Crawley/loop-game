import { JobDisplay } from "../../jobDisplay";

export const BurgersAndFries = () => {
  return (
    <div>
      <div>
        <p>Burgers & Fries LTD</p>
      </div>
      <div>
        <JobDisplay jobId={1} />
      </div>
      <div>
        <JobDisplay jobId={2} />
      </div>
    </div>
  );
};
