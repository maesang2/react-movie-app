import { useState, useEffect } from "react";
import Movie from "./Movie";

function Home() {
const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
    
  };
  useEffect(()=>{
    getMovies()
  },[]);
  console.log(movies)
  return (
    <div id="title">
      
      {loading ? <div><h1>Movie Loading...</h1></div> : 
      <div >
        <h2>Movie List</h2>
        {movies.map((movie) => (
        <Movie 
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
        />
      ))}</div>
      }
    </div>
  );
}

export default Home;