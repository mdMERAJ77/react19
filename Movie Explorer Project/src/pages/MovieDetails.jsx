import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { LinkContext } from "../context/LinkContext";
import { DownloadFlowContext } from "../context/DownloadFlowContext";
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=6ddbc96f&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
      // console.log(data);
    }
    getMovie();
  }, [id]);
  const { link1, link2 } = useContext(LinkContext);
  const {hindiGuide,englishGuide}=useContext(DownloadFlowContext);
  //Prevent crash before data loads
  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Genre: </strong>
        {movie.Genre}
      </p>
      <p>
        <strong>Released: </strong> {movie.Released}
      </p>
      <p>
        <strong>Actors: </strong>
        {movie.Actors}
      </p>
      <p>
        <strong>imdb Rating: </strong>
        {movie.imdbRating}
      </p>
      <p style={{ maxWidth: "600px" }}>
        <strong>Plot: </strong>
        {movie.Plot}
      </p>
      
      <strong id="download">Downlaod here ⬇️</strong>
      <Link to={`${link1}`} target="_blank">
        <strong>Link 1</strong>
      </Link>
      
      <Link to={`${link2}`} target="_blank">
       <strong>Link 2</strong>
      </Link>
      <h2 style={{textAlign:"center"}}>How to Download Movie from this Link</h2>
      <p style={{marginBottom:"10px",lineHeight: "1.8"}}><strong style={{color:"blue"}}>Hindi Guide:</strong> {hindiGuide}</p>
      <p><strong style={{color:"blue"}}>English Guide:</strong> {englishGuide}</p>
    </div>
  );
}

export default MovieDetails;
