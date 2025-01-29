export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchTerm,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        movie_id: movie.id,
      }),
    });

    if (!response.ok) throw new Error("Failed to update search count");

    const data = await response.json();
    console.log("Updated:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};


export const getTrendingMovies = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error in 'GET' request.");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error:", error);
  }
};
