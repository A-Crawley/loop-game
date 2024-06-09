import { ButtonHTMLAttributes, useState } from "react";
import { LifeStyles } from "./lifeStyle";
import Sidebar from "./sidebar";

const Button = (props: ButtonHTMLAttributes<unknown>) => {
  return (
    <button {...props} className="p-2 hover:bg-white/30">
      {props.children}
    </button>
  );
};

const Home = () => {
  const [tab, setTab] = useState<"Career" | "Home" | "Shop" | "Skills">(
    "Career",
  );

  return (
    <div className="flex h-full w-full gap-10 px-8 py-4">
      <Sidebar />
      <div className="h-full flex-grow overflow-hidden rounded-lg bg-zinc-500">
        <div className="grid grid-cols-4 bg-black/30">
          <Button onClick={() => setTab("Career")}>Career</Button>
          <Button onClick={() => setTab("Home")}>Home</Button>
          <Button onClick={() => setTab("Shop")}>Shop</Button>
          <Button onClick={() => setTab("Skills")}>Skills</Button>
        </div>
        <div className={`${tab === "Career" ? "visible" : "hidden"}`}>
          <LifeStyles />
        </div>
        <div className={`${tab === "Home" ? "visible" : "hidden"}`}>
          <div />
        </div>
        <div className={`${tab === "Shop" ? "visible" : "hidden"}`}>
          <div />
        </div>
        <div className={`${tab === "Skills" ? "visible" : "hidden"}`}>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Home;
