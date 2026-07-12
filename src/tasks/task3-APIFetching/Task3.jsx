import React, { useState, useEffect } from "react";
import { Atom } from "react-loading-indicators";

const Task3 = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=3",
        );
        const listData = await response.json();

        const detailedRequests = listData.results.map(async (poke) => {
          const detailResponse = await fetch(poke.url);
          return detailResponse.json();
        });

        const finalDetailedData = await Promise.all(detailedRequests);
        setPokemonList(finalDetailedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className=" bg-gray-50 text-gray-800 p-6 flex flex-col ">
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Atom color="#3cc83d" size="large" />
          <span className="text-sm font-semibold text-green-700 tracking-wider animate-pulse">
            Loading...
          </span>
        </div>
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
