import { useEffect, useRef, useState } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const fetchMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=6ddbc96f&s=${query}`
    );
    const fetchMovieData = await res.json();
    // console.log(fetchMovieData);
    //how to set in movies variable
    setMovies(fetchMovieData.Search || []);
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      fetchMovies(query);
    } else {
      return alert("input/search is empty!");
    }
  };
  useEffect(() => {
    //If your fetchMovies() is doing asynchronous work, React Strict Mode will call it twice in development.
    //(Production build will NOT call it twice.)
    //To avoid the warning, wrap the effect like this:
    const isLoadDefault = () => {
      fetchMovies("war");
    };
    isLoadDefault();
  }, []);
  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
          onChange={(e) => {
            if (e.target.value === "") {
              fetchMovies("war"); // auto load default movies
            }
          }}
        />
        <button type="submit">Search 🔎</button>
      </form>
      {loading ? <h1>Loading...</h1> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
