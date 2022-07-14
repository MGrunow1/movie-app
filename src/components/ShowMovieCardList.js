import styled from "styled-components";
import MovieCard from "./MovieCard";
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
  return (
    <div>
      <CardFrame>
        {props.movieList ? (
          props.movieList.map((movie, index) => (
            <div key={index}>
              <MovieCard movieData={movie} />
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
    </div>
  );
}
