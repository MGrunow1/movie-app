import styled from "styled-components";

const Card=styled.div`
width: 300px;
border: 1px solid black;
border-radius: 10px;
background-color: white;
padding: 5px;
margin: 5px;
box-shadow: 2px 2px 4px black;
`;

const MovieTitle=styled.div`
font-size: x-large;
font-weight: bold;
`;

export default function MovieCard(props) {
    //props.movieData.imdbID
    //const url=`http://www.omdbapi.com/?i=${API_KEY}&i=${props.movieData.imdbID}`;
    return (
        <Card>
            <MovieTitle>{props.movieData.Title}</MovieTitle>
            <div>{props.movieData.Year}</div>
            <img src={props.movieData.Poster} alt=""></img>
        </Card>
    )
}
