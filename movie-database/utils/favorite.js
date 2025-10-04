export function getFavorites() {
  const favs = localStorage.getItem("favorites");
  return favs ? JSON.parse(favs) : [];
}

export function addFavorite(movie) {
  const favorites = getFavorites();
  if (!favorites.find((m) => m.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function removeFavorite(movieId) {
  const favorites = getFavorites().filter((m) => m.id !== movieId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function isFavorite(movieId) {
  return getFavorites().some((m) => m.id === movieId);
}
