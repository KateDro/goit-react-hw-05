import { NavLink } from "react-router-dom";
import css from "../components/MoviesList/MoviesList.module.css";

export const MoviesList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.link} key={movie.id}>
          <NavLink className={css.link} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
