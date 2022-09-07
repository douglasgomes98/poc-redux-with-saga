import { useAppDispatch, useAppSelector } from "./store";
import { counterSliceActions } from "./store/counter/counterSlice";
import "./App.css";

function App() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(counterSliceActions.decrement())}
      >
        Decrement
      </button>

      <span>{counter}</span>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(counterSliceActions.increment())}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
