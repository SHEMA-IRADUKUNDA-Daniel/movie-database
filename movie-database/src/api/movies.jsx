const API_BASE_URL = "https://alx-project-nexus-jdbi.onrender.com/api/movies";

export async function getMovies(page = 1) {
  const response = await fetch(`${API_BASE_URL}/?page=${page}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  return await response.json();
}
