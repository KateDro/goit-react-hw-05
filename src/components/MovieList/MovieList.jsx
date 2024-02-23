import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.link} key={movie.id}>
          <Link className={css.link} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
