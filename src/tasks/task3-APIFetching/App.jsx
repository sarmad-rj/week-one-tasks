import React, { useState, useEffect, useCallback } from "react";
import Loading from "../../components/Loading";
import Main from "./components/Main";
import ErrorPage from "./pages/ErrorPage";
import PokemonDetailsModal from "./components/PokemonDetailsModal";
import { fetchDetailedPokemonList } from "./services/pokemonService";

const Task3 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const limit = 3;

  const loadPokemonData = useCallback(
    async (currentOffset) => {
      try {
        setLoading(true);
        setError(null);

        const finalDetailedData = await fetchDetailedPokemonList(
          limit,
          currentOffset,
        );
        setPokemonList((prevList) => [...prevList, ...finalDetailedData]);
      } catch (err) {
        setError(err.message || "An unexpected network error occurred.");
      } finally {
        setLoading(false);
      }
    },
    [limit],
  );

  useEffect(() => {
    loadPokemonData(offset);
  }, [offset, loadPokemonData]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handleRetry = () => {
    loadPokemonData(offset);
  };

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
