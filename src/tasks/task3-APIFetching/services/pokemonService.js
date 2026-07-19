const URL = "https://pokeapi.co/api/v2";

export const fetchDetailedPokemonList = async (limit, offset) => {
  const response = await fetch(
    `${URL}/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error("Could not connect to the Pokédex server.");
  }

  const listData = await response.json();

  const detailedRequests = listData.results.map(async (poke) => {
    const detailResponse = await fetch(poke.url);
    if (!detailResponse.ok) {
      throw new Error("Failed to fetch Pokémon profiles.");
    }
    return detailResponse.json();
  });

  return Promise.all(detailedRequests);
};
