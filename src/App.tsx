import { useAppDispatch, useAppSelector } from "./store";
import { counterSliceActions } from "./store/features/counter/counterSlice";
import "./App.css";
import { useGetPokemonByNameQuery } from "./store/services/pokemon";

function PokemonItem() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
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
