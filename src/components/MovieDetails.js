import styled from "styled-components";
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
    function closeModal () {
        props.setter(null);
    }
    return (
        <ModalBackground onClick={closeModal}>
            <Modal>Movie Information</Modal>
        </ModalBackground>
    )
}
