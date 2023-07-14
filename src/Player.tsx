import { Play, SkipForward, SkipBack, Pause } from "lucide-react";
import { Song } from "../types";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import {
  setNextSong,
  setPlaying,
  setPrevSong,
  setSongDuration,
} from "./redux/slice/audioSlice";
interface PlayerProps {}
const Player: React.FC<PlayerProps> = ({}) => {
  const { currentSong, currentDuration, isPlaying, maxDuration } = useSelector(
    (state: RootState) => state.audio
  );
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    }
  }, [currentSong]);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      dispatch(setPlaying(!isPlaying));
      return;
    }
    dispatch(setPlaying(!isPlaying));
    audioRef.current?.play();
  };

  const timeUpdateHandler = (e: any) => {
    dispatch(
      setSongDuration({
        currentDuration: e.target.currentTime,
        maxDuration: e.target.duration,
      })
    );
  };

  const dragTimeHandler = (e: any) => {
    if (audioRef.current) {
      audioRef.current.currentTime = e.target.value;
    }

    dispatch(
      setSongDuration({
        currentDuration: e.target.currentTime,
        maxDuration: maxDuration,
      })
    );
  };

  function songTimeFormat(timeInSeconds: number) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    if (hours > 0) {
      const formattedHours = String(hours).padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  }
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div className="flex gap-4 w-3/4 md:w-1/2">
        <h1 className="w-14 flex-shrink-0">
          {songTimeFormat(currentDuration || 0)}
        </h1>
        <input
          onChange={(e) => dragTimeHandler(e)}
          min={0}
          max={maxDuration || 1}
          value={currentDuration || 0}
          className="w-full"
          title="audio-select"
          name="audio-select"
          type="range"
        />
        <h1 className="w-14 flex-shrink-0">
          {songTimeFormat(maxDuration || 0)}
        </h1>
      </div>
      <div className="flex gap-4">
        <SkipBack onClick={() => dispatch(setPrevSong())} />

        {isPlaying ? (
          <Pause
            onClick={() => {
              playSongHandler();
            }}
          />
        ) : (
          <Play
            onClick={() => {
              playSongHandler();
            }}
          />
        )}
        <SkipForward onClick={() => dispatch(setNextSong())} />
      </div>
      <audio
        onTimeUpdate={(e) => timeUpdateHandler(e)}
        onEnded={() => {
          dispatch(setNextSong());
        }}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
};

export default Player;
