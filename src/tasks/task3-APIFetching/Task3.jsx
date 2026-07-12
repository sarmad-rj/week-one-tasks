import React, { useState, useEffect } from "react";
import { GoAlertFill } from "react-icons/go";
import { IoMdRepeat } from "react-icons/io";
import Loading from "../../components/Loading";

const Task3 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=15",
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
      setPokemonList(finalDetailedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <div className=" bg-gray-50 text-gray-800 p-6 flex  items-center justify-center flex-col ">
      {error ? (
        <div className="bg-red-50 border  border-red-200 rounded-2xl p-6 text-center max-w-sm w-full shadow-sm">
          <div className="text-3xl mb-2 flex items-center justify-center text-red-600">
            <GoAlertFill />
          </div>
          <h3 className="text-lg font-bold text-red-900 mb-1">
            Data Fetch Failed
          </h3>
          <p className="text-sm text-red-700 mb-4">{error}</p>

          <button
            onClick={fetchPokemonData}
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-xl shadow transition duration-150 inline-flex items-center justify-center gap-2"
          >
            <IoMdRepeat className="text-sm" />
            Try Again
          </button>
        </div>
      ) : loading ? (
        <Loading/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {pokemonList.map((poke) => (
            <div
              key={poke.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm text-center"
            >
              <div className="bg-gray-50 rounded-xl py-4 mb-4 flex justify-center relative">
                <span className="absolute top-2 left-3 text-xs font-mono text-gray-400">
                  #{String(poke.id).padStart(3, "0")}
                </span>
                <img
                  src={poke.sprites.other["official-artwork"].front_default}
                  alt={poke.name}
                  className="h-32 w-32 object-contain"
                />
              </div>

              <h2 className="text-xl font-bold text-gray-900 capitalize mb-2">
                {poke.name}
              </h2>

              <div className="flex justify-center gap-2">
                {poke.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase bg-blue-50 text-blue-600 tracking-wider"
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Task3;
