import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./Loading";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const ModalBackground = styled.div`position: fixed;
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
padding: 5px;
`;

export default function MovieDetails(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [movieInfo, setMovieInfo] = useState({})
    function closeModal () {
        props.setter(null);
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
        getMovieDetails()
    }, [props.movie]);
    return (
        <ModalBackground onClick={closeModal}>
            <Modal>
                <div>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div>
                            <div>{movieInfo.Title}</div>
                        </div>
                    )}
                </div>
            </Modal>
       </ModalBackground>
    )
}
