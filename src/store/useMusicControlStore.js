import { create } from "zustand";

const useMusicControlStore = create((set, get) => ({
  isMuted: true,
  experienceStarted: false,
  setIsMuted: (state) => set({ isMuted: state }),
  startExperience: () => set({ experienceStarted: true }),

  toggleMuteUnmute: () => {
    const isMuted = get().isMuted;
    set({ isMuted: !isMuted });
  },

  setMusicState: (mute) => set({ isMuted: mute }),
}));

export default useMusicControlStore;
