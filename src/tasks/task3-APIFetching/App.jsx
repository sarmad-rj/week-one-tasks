import React from "react";
import Loading from "../../components/Loading";
import Main from "./components/Main";
import ErrorPage from "./pages/ErrorPage";
import PokemonDetailsModal from "./components/PokemonDetailsModal";
import { usePokemon } from "./hooks/usePokemon";

const Task3 = () => {
  const {
    pokemonList,
    loading,
    error,
    offset,
    selectedPokemon,
    setSelectedPokemon,
    handleLoadMore,
    handleRetry,
  } = usePokemon(3);

  return (
    <div className="bg-gray-50 text-gray-800 p-6 flex items-center justify-center flex-col">
      {error ? (
        <ErrorPage error={error} fetchPokemonData={handleRetry} />
      ) : loading && offset === 0 ? (
        <Loading />
      ) : (
        <Main
          pokemonList={pokemonList}
          loading={loading}
          handleLoadMore={handleLoadMore}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}

      <PokemonDetailsModal
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </div>
  );
};

export default Task3;
