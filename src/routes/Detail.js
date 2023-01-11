import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

function Detail(){
    const {id} = useParams();
    console.log(id);
    const [movie, setMovie] = useState([]);
    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json(); 
        setMovie(json.data.movie);
    }
    useEffect(()=>{
      getMovie();
    },[]);
    return <>
    <img src={movie.medium_cover_image} />
    <h1>{movie.title}</h1>
    <div>{movie.summary}</div>
    <ul>
        {movie.genres === undefined ? null :
        movie.genres.map((item,index)=>(
        <li key={index}>{item}</li>) 
        )}
    </ul>
    </>
}

export default Detail;