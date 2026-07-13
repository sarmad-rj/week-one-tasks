import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import Main from "./Main";
import ErrorComponenet from "./ErrorComponenet";
import PokemonDetailsModal from "./PokemonDetailsModal";

const Task3 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const limit = 1;

  const fetchPokemonData = async (currentOffset) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${currentOffset}`,
      );

      if (!response.ok) {
        throw new Error("Could not connect to the Pokédex server.");
      }

      const listData = await response.json();

      const detailedRequests = listData.results.map(async (poke) => {
        const detailResponse = await fetch(poke.url);
        if (!detailResponse.ok)
          throw new Error("Failed to fetch Pokémon profiles.");
        return detailResponse.json();
      });

      const finalDetailedData = await Promise.all(detailedRequests);
      setPokemonList((prevList) => [...prevList, ...finalDetailedData]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData(offset);
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <div className=" bg-gray-50 text-gray-800 p-6 flex  items-center justify-center flex-col ">
      {error ? (
        <ErrorComponenet error={error} fetchPokemonData={fetchPokemonData} />
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
