import React, { useState, useEffect } from "react";

const Task3 = () => {
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    const fetchSinglePokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/pikachu",
        );
        const data = await response.json();
        console.log("All Pokémon Data:", data);

        setPokemonName(data.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSinglePokemon();
  }, []);

  return (
    <div className="flex justify-center">
      <p>Target Pokémon: {pokemonName}</p>
    </div>
  );
};

export default Task3;
