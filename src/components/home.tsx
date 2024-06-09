import { LifeStyles } from "./lifeStyle";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <div className="flex h-full w-full gap-10 p-8">
      <Sidebar />
      <div className="h-full flex-grow rounded-lg bg-zinc-500">
        <LifeStyles />
      </div>
    </div>
  );
};

export default Home;
