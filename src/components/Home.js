import { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export default function Home() {
  const [name, setName] = useState("Avengers");
  const [isLoading, setIsLoading] = useState(false);  
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    async function getMoviesByName() {
      setIsLoading(true);
        const url=`http://www.omdbapi.com/?i=${API_KEY}&s=${name}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        setMaxPages(Math.ceil(data.totalResults/10));
        setMovieList(data.Search);
    }
    getMoviesByName();
    setIsLoading(false);
}, [name, page]);


 

  /*
  const movieData = [
    {
      Title: "Star Wars",
      Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
      Awards: "Won 6 Oscars. 63 wins & 29 nominations total",
      BoxOffice: "$460,998,507",
      Country: "United States",
      DVD: "06 Dec 2005",
      Director: "George Lucas",
      Genre: "Action, Adventure, Fantasy",
      Language: "English",
      Metascore: "90",
      Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      Production: "N/A",
      Rated: "PG",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.6/10" },
        { Source: "Rotten Tomatoes", Value: "93%" },
        { Source: "Metacritic", Value: "90/100" },
      ],
      Released: "25 May 1977",
      Response: "True",
      Runtime: "121 min",
      Title: "Star Wars",
      Type: "movie",
      Website: "N/A",
      Writer: "George Lucas",
      Year: "1977",
      imdbID: "tt0076759",
      imdbRating: "8.6",
      imdbVotes: "1,331,149",
    },
    {
      Title: "Fantasia",
      Actors: "Leopold Stokowski, Deems Taylor, The Philadelphia Orchestra",
      Awards: "8 wins & 1 nomination",
      BoxOffice: "$76,408,097",
      Country: "United States",
      DVD: "20 Feb 2007",
      Director: "James Algar, Samuel Armstrong, Ford Beebe Jr.",
      Genre: "Animation, Family, Fantasy",
      Language: "English",
      Metascore: "96",
      Plot: "A collection of animated interpretations of great works of Western classical music, ranging from the abstract to depictions of mythology and fantasy, and settings including the prehistoric, supernatural and sacred.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMTI1Njk3OF5BMl5BanBnXkFtZTgwNjkzODk4NTE@._V1_SX300.jpg",
      Production: "N/A",
      Rated: "G",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.7/10",
        },
        { Source: "Rotten Tomatoes", Value: "95%" },
        { Source: "Metacritic", Value: "96/100" },
      ],
      Released: "19 Sep 1941",
      Response: "True",
      Runtime: "125 min",
      Title: "Fantasia",
      Type: "movie",
      Website: "N/A",
      Writer: "Joe Grant, Dick Huemer, Lee Blair",
      Year: "1940",
      imdbID: "tt0032455",
      imdbRating: "7.7",
      imdbVotes: "95,118",
    },
  ]; 
  */
  
  

  return (
    <div className="Home">
      <h1>Movie Information</h1>
      <SearchBar name={name} setSearch={setName} />
      <div>
        {isLoading ? (
            <Loading />
        ) : (
          <div>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
              {movieList ? (
                movieList.map((movie) => (
                  <div>
                    <MovieCard movieData={movie} />
                  </div>
                ))
              ) : (
                <div>No movies found.</div>
              )}
            </div>
            {movieList && (<Paginator page={page} maxPages={maxPages} setPage={setPage} />)}
          </div>
        )}
      </div>
    </div>
  );
}
