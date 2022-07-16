import styled from "styled-components";

const Card=styled.button`
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

    // select the current movie by its IMBD number
    function submit() {
        props.chooseMovie(props.movieData.imdbID);
    }

    return (
        <Card onClick={submit}>
            <MovieTitle>{props.movieData.Title}</MovieTitle>
            <div>{props.movieData.Year}</div>
            <img src={props.movieData.Poster} alt=""></img>
        </Card>
    )
}
