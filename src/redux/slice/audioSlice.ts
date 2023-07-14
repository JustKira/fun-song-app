import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../../types";
import { MusicD } from "../../d";

interface AudioSliceState {
  currentSong: Song;
  isPlaying: boolean;
  currentDuration: number;
  maxDuration: number;
}

const initialState: AudioSliceState = {
  currentSong: MusicD[0],
  isPlaying: false,
  currentDuration: 0,
  maxDuration: 0,
};

const audioSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSong(state, action: PayloadAction<Song>) {
      state.currentSong = action.payload;
    },
    setPlaying(state, action: PayloadAction<boolean>) {
      state.isPlaying = action.payload;
    },
    setSongDuration(
      state,
      action: PayloadAction<{ currentDuration: number; maxDuration: number }>
    ) {
      state.currentDuration = action.payload.currentDuration;
      state.maxDuration = action.payload.maxDuration;
    },
    setCurrentDuration(state, action: PayloadAction<number>) {
      state.currentDuration = action.payload;
    },
    setNextSong(state) {
      const currentIndex = MusicD.findIndex(
        (song) => song.id === state.currentSong.id
      );
      const nextIndex = (currentIndex + 1) % MusicD.length;
      state.currentSong = MusicD[nextIndex];
    },
    setPrevSong(state) {
      const currentIndex = MusicD.findIndex(
        (song) => song.id === state.currentSong.id
      );
      const prevIndex =
        currentIndex === 0 ? MusicD.length - 1 : currentIndex - 1;
      state.currentSong = MusicD[prevIndex];
    },
  },
});

export const {
  setSongDuration,
  setCurrentDuration,
  setSong,
  setPlaying,
  setNextSong,
  setPrevSong,
} = audioSlice.actions;
export default audioSlice.reducer;
