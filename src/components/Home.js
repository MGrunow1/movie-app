import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import ShowMovieCardList from "./ShowMovieCardList";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const HomePage=styled.div`
${(props) => props.dark
  ? `color: white;
    background-color: darkblue;`
  : `color: black;
    background-color: aliceblue;`
}
min-height: 100vh;
font-size: calc(10px + 2vmin);
`;

export default function Home(props) {
  const [name, setName] = useState(props.name);
  const [isLoading, setIsLoading] = useState(false);  
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const { theme } = useContext(ThemeContext);

  // fetch list of matching movies
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

// object with information for Paginator
let pagedata={page, setPage, maxPages};
 
  return (
    <HomePage dark={theme === 'dark'}>
      <h1 style={{marginTop: 0}}>Movie Information</h1>
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
