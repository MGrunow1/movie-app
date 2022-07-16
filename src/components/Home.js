import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import ShowMovieCardList from "./ShowMovieCardList";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const HomePage=styled.div`
background-color: aliceblue;
min-height: 100vh;
font-size: calc(10px + 2vmin);
`;

export default function Home() {
  const [name, setName] = useState("Avengers");
  const [isLoading, setIsLoading] = useState(false);  
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    async function getMoviesByName() {
      setIsLoading(true);
      const url=`http://www.omdbapi.com/?${API_KEY}&s=${name}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setMaxPages(Math.ceil(data.totalResults/10));
      setMovieList(data.Search);
      setIsLoading(false);
    }
    getMoviesByName();
}, [name, page]);

let pagedata={page, setPage, maxPages};
 
  return (
    <HomePage>
      <h1>Movie Information</h1>
      <SearchBar name={name} setSearch={setName} />
      <div>
        {isLoading ? (
            <Loading />
        ) : (
          <div>
            <ShowMovieCardList movieList={movieList} pagedata={pagedata} />
          </div>
        )}
      </div>
    </HomePage>
  );
}
