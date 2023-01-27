import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { devtools } from "zustand/middleware";

// create a vanilla zustand store
export const appStore = createStore(
  devtools((set, get) => ({
    count: 0,
    actions: {
      incrementCount: () => set((state) => ({ count: state.count + 1 })),
    },
  })),
  { name: "AppStore" }
);

// also export store as a react hook
export const useBoundStore = (selector) => useStore(appStore, selector);
