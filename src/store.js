import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { devtools } from "zustand/middleware";
import AppStoreDistributed from "./haxademic/app-store-distributed";

// create a vanilla zustand store
export const appStore = createStore(
  devtools((set, get) => ({
    actions: {
      storeUpdated: (key, value) => {
        set((state) => ({ ...state, [key]: value }));
      },
      setStoreValue: (key, value, broadcast = true) => {
        store.set(key, value, broadcast);
      },
    },
  })),
  { name: "AppStore" }
);

// also export store as a react hook
export const useBoundStore = (selector) => useStore(appStore, selector);

// init haxademic store
const store = new AppStoreDistributed("ws://localhost:3001/ws");
store.addListener({
  storeUpdated: appStore.getState().actions.storeUpdated,
});
