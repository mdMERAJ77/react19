import { Link } from "react-router-dom"
function MovieCard({currMovie}) {
  return (
    <div className="movie-card">
      <img
        alt={currMovie.Title}
        src={currMovie.Poster}
      />
      <h3>Name: {currMovie.Title}</h3>
      <p style={{marginBottom:"20px"}}>Year: {currMovie.Year}</p>
      <Link to={`/movie/${currMovie.imdbID}`}>Details</Link>
    </div>
  );
}

export default MovieCard;
