import React from "react";

const Task3 = () => {
  const Pokemon = [
    {
      id: 1,
      name: "bulbasaur",
      types: ["grass", "poison"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZTRcCp5iC8oydTxw48RqUdue4uHyNKbMN727VyOmIQ&s=10",
    },
    {
      id: 2,
      name: "bulbasaur",
      types: ["grass", "poison"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZTRcCp5iC8oydTxw48RqUdue4uHyNKbMN727VyOmIQ&s=10",
    },
    {
      id: 3,
      name: "bulbasaur",
      types: ["grass", "poison"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZTRcCp5iC8oydTxw48RqUdue4uHyNKbMN727VyOmIQ&s=10",
    },
  ];

  return (
    <div className=" bg-gray-50 text-gray-800 p-6 flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {Pokemon.map((poke) => (
          <div
            key={poke.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm text-center"
          >
            <div className="bg-gray-50 rounded-xl py-4 mb-4 flex justify-center relative">
              <span className="absolute top-2 left-3 text-xs font-mono text-gray-400">
                #{String(poke.id).padStart(3, "0")}
              </span>
              <img
                src={poke.image}
                alt={poke.name}
                className="h-32 w-32 object-contain"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900 capitalize mb-2">
              {poke.name}
            </h2>

            <div className="flex justify-center gap-2">
              {poke.types.map((type) => (
                <span
                  key={type}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full uppercase bg-blue-50 text-blue-600 tracking-wider"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task3;
