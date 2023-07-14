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
      <div className="flex flex-col mt-12 ">
        {MusicD.map((song, id) => (
          <div
            onClick={() => dispatch(setSong(song))}
            key={id}
            className="flex gap-2 p-4 duration-300 bg-white group dark:bg-gray-950 hover:bg-gray-200 hover:dark:bg-gray-800"
          >
            <img
              alt={`${song.name} img`}
              className="w-1/2 duration-300 rounded-3xl group-hover:rounded-md"
              src={song.cover}
            />
            <div className="flex flex-col justify-start">
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
        className="absolute top-0 left-0 z-50 flex items-center justify-center w-12 h-12 text-white rounded-full bg-gray-950 dark:text-black dark:bg-white"
        type="button"
        onClick={() => {
          setExtend(!extend);
        }}
        title="extend"
      >
        <Music />
      </button>
      <div
        className={`absolute left-0 h-screen w-[400px] z-30 duration-700 transition-all ease-in-out overflow-y-scroll ${
          extend ? "" : "-translate-x-full "
        }`}
      >
        <SongsRender />
      </div>
    </>
  );
};

export default SongLibrary;
