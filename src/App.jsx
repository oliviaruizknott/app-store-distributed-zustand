import "./App.css";
import { useBoundStore } from "./store";

const App = () => {
  const x = useBoundStore((state) => state.MOUSE_X);
  const y = useBoundStore((state) => state.MOUSE_Y);
  const setStoreValue = useBoundStore((state) => state.actions.setStoreValue);

  return (
    <div className="App">
      <div>
        <h1>X: {x}</h1>
        <h1>Y: {y}</h1>
      </div>
      <button onClick={() => setStoreValue("CUSTOM", "Hello World!")}>
        Send "Hello World!"
      </button>
    </div>
  );
};

export default App;
