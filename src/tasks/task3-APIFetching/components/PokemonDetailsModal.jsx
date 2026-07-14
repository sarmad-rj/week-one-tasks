import React from "react";
import { IoMdClose } from "react-icons/io";

const PokemonDetailsModal = ({ selectedPokemon, setSelectedPokemon }) => {
  if (!selectedPokemon) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-xl relative animate-scale-up">
        <button
          onClick={() => setSelectedPokemon(null)}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition"
        >
          <IoMdClose size={20} />
        </button>

        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl py-6 mb-4 flex justify-center">
            <img
              src={
                selectedPokemon.sprites.other["official-artwork"].front_default
              }
              alt={selectedPokemon.name}
              className="h-40 w-40 object-contain"
            />
          </div>

          <span className="text-xs font-mono text-gray-400">
            #{selectedPokemon.id}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 capitalize mb-4">
            {selectedPokemon.name}
          </h2>

          <div className="grid grid-cols-2 gap-3 mb-4 bg-gray-50 p-3 rounded-xl">
            <div>
              <span className="text-xs text-gray-400 block font-medium">
                Height
              </span>
              <span className="text-sm font-semibold text-gray-700">
                {selectedPokemon.height}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-400 block font-medium">
                Weight
              </span>
              <span className="text-sm font-semibold text-gray-700">
                {selectedPokemon.weight}
              </span>
            </div>
          </div>

          <div className="text-left space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
              Base Stats
            </h4>
            {selectedPokemon.stats.map((stat) => (
              <div
                key={stat.stat.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="capitalize text-gray-500">
                  {stat.stat.name}
                </span>
                <span className="font-bold text-gray-800">
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsModal;
