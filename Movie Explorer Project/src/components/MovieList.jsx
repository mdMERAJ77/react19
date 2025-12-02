import MovieCard from "./MovieCard"
function MovieList({movies}) {
  if(movies.length==0){
    return <h1 style={{textAlign:"center"}}>No💔 Movies Found!</h1>
  }
  return (
   <div className="movie-list">
     {movies.map((currMovie,index)=>(
      //This guarantees unique keys even if API gives duplicates.
      <MovieCard key={currMovie.imbdID+"_"+index} currMovie={currMovie}/>
     ))}
   </div>
  )
}

export default MovieList