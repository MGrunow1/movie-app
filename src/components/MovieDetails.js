import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const BoldWord = styled.div`
margin-top: 9px;
align-self: flex-start;
font-weight: bold;
`;

const GrayBox = styled.div`
background-color: silver;
width: fit-content;
margin: 5px;
padding: 3px 9px 3px 9px;
border-radius: 0.4em;
`

const InfoBlock = styled.div`
display: flex;
flex-wrap: wrap;
padding: 5px;
`;

const MainInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: calc(min(90vw, 400px));
font-size: medium;
padding: 1px 9px 1px 9px;
`;

const MainCloseButton = styled.div`
margin-top: 15px;
padding: 4px 9px 4px 9px;
border: 2px solid black;
border-radius: 10px;
box-shadow: 1px 1px 2px black;
font-size: large;
font-weight: bold;
`;

const ModalBackground = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
display: flex;
justify-content: center;
align-items: center;
`;

const Modal = styled.div`
background-color: white;
`;

const MovieTitle = styled.div`
font-size: x-large;
font-weight: bold;
text-align: left;
padding: 5px;
`;

const PosterImage = styled.img`
display: inline-block;
margin-bottom: 5px;
`;

const RatingAndTime = styled.div`
width: 50%;
display: flex;
justify-content: space-evenly
`;

const SmallCloseBlock = styled.div`
display: flex;
justify-content: flex-end;
`;

const SmallCloseButton = styled.button`
background-color: darkred;
border: 1px solid darkred;
color: white;
`;

const TextBlock = styled.div`
align-self: start;
text-align: left;
margin-bottom: 10px;
`;

export default function MovieDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [movieInfo, setMovieInfo] = useState({})
    function closeModal () {
        props.setter(null);
    }
    function dontCloseModal(event) {
        event.stopPropagation();
    }
    useEffect(() => {
        async function getMovieDetails() {
          setIsLoading(true);
          const url=`http://www.omdbapi.com/?${API_KEY}&i=${props.movie}`;
          const response = await fetch(url);
          const data = await response.json();
          setMovieInfo(data);
          setIsLoading(false);
        }
        getMovieDetails();
    }, [props.movie]);

    return (
        <ModalBackground onClick={closeModal}>
            <Modal>                
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <SmallCloseBlock>
                            <SmallCloseButton onClick={closeModal}>x</SmallCloseButton>
                        </SmallCloseBlock>
                        <InfoBlock onClick={dontCloseModal}>
                            <PosterImage src={movieInfo.Poster} alt="" />
                            <MainInfo>
                                <MovieTitle>{movieInfo.Title}</MovieTitle>
                                <RatingAndTime>
                                    <GrayBox>{movieInfo.Rated}</GrayBox>
                                    <GrayBox>{movieInfo.Runtime}</GrayBox>
                                </RatingAndTime>
                                <GrayBox>{movieInfo.Genre}</GrayBox>
                                <BoldWord>Plot:</BoldWord>
                                <TextBlock>{movieInfo.Plot}</TextBlock>
                                <BoldWord>Actors:</BoldWord>
                                <TextBlock>{movieInfo.Actors}</TextBlock>
                                <MainCloseButton onClick={closeModal}>Close</MainCloseButton>
                            </MainInfo>
                        </InfoBlock>
                    </div>
                    )}
            </Modal>
       </ModalBackground>
    )
}
