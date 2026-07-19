import { useState, useEffect, useCallback } from "react";
import { fetchDetailedPokemonList } from "../services/pokemonService";

export const usePokemon = (limit = 3) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const loadPokemonData = useCallback(
    async (currentOffset) => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDetailedPokemonList(limit, currentOffset);
        setPokemonList((prev) => [...prev, ...data]);
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

  const handleLoadMore = useCallback(() => {
    setOffset((prev) => prev + limit);
  }, [limit]);

  const handleRetry = useCallback(() => {
    loadPokemonData(offset);
  }, [offset, loadPokemonData]);

  return {
    pokemonList,
    loading,
    error,
    offset,
    selectedPokemon,
    setSelectedPokemon,
    handleLoadMore,
    handleRetry,
  };
};
