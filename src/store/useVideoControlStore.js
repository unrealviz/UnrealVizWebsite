import { create } from "zustand";

const useVideoControlStore = create((set, get) => ({
  isPaused: true,
  isMuted: true,
  experienceStarted: false,
  setIsPaused: (state) => set({ isPaused: state }),
  setIsMuted: (state) => set({ isMuted: state }),
  startExperience: () => set({ experienceStarted: true }),

  togglePlayPause: () => {
    const isPaused = get().isPaused;
    set({ isPaused: !isPaused });
  },

  toggleMuteUnmute: () => {
    const isMuted = get().isMuted;
    set({ isMuted: !isMuted });
  },

  setVideoState: (pause, mute) => set({ isPaused: pause, isMuted: mute }),
}));

export default useVideoControlStore;
