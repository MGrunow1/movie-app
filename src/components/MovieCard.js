import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

const Card=styled.button`
width: 300px;
${(props) => props.dark
  ? `border: 1px solid white;
    background-color: black;
    color: white;`
  : `border: 1px solid black;
    background-color: white;
    color: black;`
}
border-radius: 10px;
padding: 5px;
margin: 5px;
box-shadow: 2px 2px 4px black;
`;

const MovieTitle=styled.div`
font-size: x-large;
font-weight: bold;
`;

export default function MovieCard(props) {
    const { theme } = useContext(ThemeContext);

    // select the current movie by its IMBD number
    function submit() {
        props.chooseMovie(props.movieData.imdbID);
    }

    return (
        <Card onClick={submit} dark={theme === 'dark'}>
            <MovieTitle>{props.movieData.Title}</MovieTitle>
            <div>{props.movieData.Year}</div>
            <img src={props.movieData.Poster} alt=""></img>
        </Card>
    )
}
