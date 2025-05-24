const API = "https://api.themoviedb.org/3";
const API_KEY = "1862a649f4e7cacc9973a165f15523be";

export async function getMovies(path) {
  try {
    const response = await fetch(`${API}${path}?api_key=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error Fetching movies:", error);
  }
}
