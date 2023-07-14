import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
interface SongProps {}

const Song: React.FC<SongProps> = () => {
  const currentSong = useSelector(
    (state: RootState) => state.audio.currentSong
  );

  return (
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="relative mb-12">
        <img
          className=" relative z-10 w-[300px] rounded-full"
          alt={`${currentSong.name} cover img`}
          src={currentSong.cover}
        />
        <img
          className="w-[600px] scale-150 absolute top-0 left-0 blur-3xl opacity-50 rounded-full"
          alt={`${currentSong.name} cover img`}
          src={currentSong.cover}
        />
      </div>
      <h1 className="relative z-10 text-3xl font-extrabold ">
        {currentSong.name}
      </h1>{" "}
      <h1 className="relative z-10 ">{currentSong.artist}</h1>
    </div>
  );
};

export default Song;
