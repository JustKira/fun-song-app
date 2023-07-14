import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import Song from "./Song";
import Player from "./Player";
import SongLibrary from "./SongLibrary";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <main className={`${dark ? "dark" : ""}  `}>
      <div className=" h-screen font-exo2 dark:text-white bg-white dark:bg-slate-950 transition-all duration-300 delay-100 overflow-clip">
        <nav className="absolute h-12 flex w-full justify-center items-end gap-4">
          <button
            type="button"
            title="darkmode"
            className="h-8 w-8"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </nav>
        <div className="h-full w-full flex flex-col items-center justify-center ">
          <Song />
          <Player />
          <SongLibrary />
        </div>
      </div>
    </main>
  );
}

export default App;
