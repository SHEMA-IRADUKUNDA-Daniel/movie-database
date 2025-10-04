const API_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "4bac100a5963573ae9d1cc75548b936d";

export async function getMovies(page = 1, query = "") {
  const url = query.trim()
    ? `${API_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    : `${API_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  return await response.json();
}

export async function fetchMovie(movieId) {
  const url = `${API_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
}

export async function getGenres() {
  const response = await fetch(
    `${API_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  const data = await response.json();
  return data.genres;
}
