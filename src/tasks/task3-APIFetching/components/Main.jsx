import React, { memo } from "react";
import Loading from "../../../components/Loading";

const Main = ({ pokemonList, loading, handleLoadMore, setSelectedPokemon }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {pokemonList.map((poke) => (
          <div
            key={poke.id}
            onClick={() => setSelectedPokemon(poke)}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm text-center cursor-pointer"
          >
            <div className="bg-gray-50 rounded-xl py-4 mb-4 flex justify-center relative">
              <span className="absolute top-2 left-3 text-xs font-mono text-gray-400">
                #{poke.id}
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
      <div className="mt-8 mb-4 min-h-[80px] flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow transition active:scale-95"
          >
            Load More Pokémon
          </button>
        )}
      </div>
    </>
  );
};

export default memo(Main);
