const API_BASE_URL = "https://alx-project-nexus-jdbi.onrender.com/api";

export async function getMovies(page = 1, query = "") {
  const url = query.trim()
    ? `${API_BASE_URL}/movies/?query=${encodeURIComponent(query)}&page=${page}`
    : `${API_BASE_URL}/movies/?page=${page}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  return await response.json();
}

export async function fetchMovie(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/movies/${id}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching movie ${id}:`, error);
    throw error;
  }
}
