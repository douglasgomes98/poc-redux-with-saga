import "./App.css";
import { useGetAgenciesQuery } from "./graphql/generated/graphql";
import { counterSliceActions } from "./store/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

function PokemonItem() {
  const { data, error, loading } = useGetAgenciesQuery();
  // const [mutate, { }] = useEnableAgencyMutation()

  const t = data?.getAgencies[0];
  

  // return <h1>Test</h1>
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : loading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {JSON.stringify(data || {})}
        </>
      ) : null}
    </div>
  );
}

function App() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
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

      <PokemonItem></PokemonItem>
    </>
  );
}

export default App;
