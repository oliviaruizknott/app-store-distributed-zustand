import "./App.css";
import { useBoundStore } from "./store";

const App = () => {
  const x = 0;
  const y = 0;

  const count = useBoundStore((state) => state.count);
  const incrementCount = useBoundStore((state) => state.actions.incrementCount);

  return (
    <div className="App">
      <div>
        <h1>X: {x}</h1>
        <h1>Y: {y}</h1>
      </div>
      <button onClick={incrementCount}>{count}</button>
    </div>
  );
};

export default App;
