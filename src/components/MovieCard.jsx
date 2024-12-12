import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  // console.log({ movie });

  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>
        {movie.title} ({movie.release_date.substring(0, 4)})
      </h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movieslib/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
