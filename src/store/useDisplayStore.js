import { create } from "zustand";

const useDisplayStore = create((set, get) => {
  let initialized = false;

  return {
    isDesktop: false,

    setIsDesktop: (value) => set({ isDesktop: value }),

    initialize: () => {
      if (typeof window === "undefined" || initialized) return;

      initialized = true;

      const checkWidth = () => {
        set({ isDesktop: window.innerWidth > 450 });
      };

      checkWidth();

      window.addEventListener("resize", checkWidth);
    },
  };
});

export default useDisplayStore;
