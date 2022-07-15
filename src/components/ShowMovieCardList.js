import { useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import Paginator from "./Paginator";

const CardFrame=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const PaginatorBlock=styled.div`
display:block;
`;

export default function ShowMovieCardList(props) {
  //movieToDetail uses IMDB number, or null when none chosen
  const [movieToDetail, setMovieToDetail] = useState(null);
  return (
    <div>
      <CardFrame>
        {props.movieList ? (
          props.movieList.map((movie, index) => (
            <div key={index}>
              <MovieCard movieData={movie} chooseMovie={setMovieToDetail} />
            </div>
          ))
        ) : (
          <div>No movies found.</div>
        )}
      </CardFrame>
      <PaginatorBlock>
        {props.movieList && (
          <Paginator pagedata={props.pagedata} />
        )}
      </PaginatorBlock>
      {movieToDetail && <MovieDetails movie={movieToDetail} setter={setMovieToDetail} />}
    </div>
  );
}
