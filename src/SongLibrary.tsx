import React from "react";
import { MusicD } from "./d";
import { Music } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSong } from "./redux/slice/audioSlice";
const SongLibrary = () => {
  const [extend, setExtend] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const SongsRender = () => {
    return (
      <div className="  flex flex-col mt-12">
        {MusicD.map((song, id) => (
          <div
            onClick={() => dispatch(setSong(song))}
            key={id}
            className="flex group gap-2 p-4 bg-white dark:bg-gray-950 hover:bg-gray-200 hover:dark:bg-gray-800 duration-300"
          >
            <img
              alt={`${song.name} img`}
              className="w-1/2 rounded-3xl group-hover:rounded-md duration-300"
              src={song.cover}
            />
            <div className="flex  flex-col justify-start">
              <h1 className="text-3xl">{song.name}</h1>
              <h1>{song.artist}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <button
        className="flex justify-center items-center absolute left-0 top-0 z-50 bg-gray-950 text-white dark:text-black dark:bg-white h-12 w-12 rounded-full"
        type="button"
        onClick={() => {
          setExtend(!extend);
        }}
        title="extend"
      >
        <Music />
      </button>
      <div
        className={`absolute left-0 h-screen w-[400px] duration-700 transition-all ease-in-out overflow-y-scroll ${
          extend ? "" : "-translate-x-full "
        }`}
      >
        <SongsRender />
      </div>
    </>
  );
};

export default SongLibrary;
