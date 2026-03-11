import { create } from "zustand";

export const useStore = create((set) => ({
  imagesLoaded: false,
  setImagesLoaded: (value) => set({ imagesLoaded: value }),
}));
