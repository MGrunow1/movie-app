import MovieCard from "./MovieCard";
import Paginator from "./Paginator";

export default function ShowMovieCardList(props) {
  const { page, setPage, maxPages } = props.pagedata;
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {props.movieList ? (
          props.movieList.map((movie) => (
            <div>
              <MovieCard movieData={movie} />
            </div>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </div>
      <div style={{ display: "block" }}>
        {props.movieList && (
          <Paginator page={page} maxPages={maxPages} setPage={setPage} />
        )}
      </div>
    </div>
  );
}
