export default function MovieCard(props) {
    //props.movieData.imdbID
    //const url=`http://www.omdbapi.com/?i=${API_KEY}&i=${props.movieData.imdbID}`;
    return (
        <div className="MovieCard">
            <div className="MovieTitle">{props.movieData.Title}</div>
            <div>{props.movieData.Year}</div>
            <img src={props.movieData.Poster} alt=""></img>
        </div>
    )
}
