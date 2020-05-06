import React from 'react';
import { Link } from 'react-router-dom';
import MoviCard from './MovieCard';

const MovieList = props => {
  console.log(props.movies);
  return (
    
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  //const { title, director, metascore, stars, id} = movie;
  
  return (
    <Link to={`/movies/${movie.id}`}><MoviCard movie={movie}/></Link>
  );
}

export default MovieList;
