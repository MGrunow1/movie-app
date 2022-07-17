import styled from "styled-components";
import SearchBar from "./SearchBar";

const IntroductoryPage=styled.div`
background-color: aliceblue;
min-height: 100vh;
font-size: calc(10px + 2vmin);
display: flex;
flex-direction: column;
`;

const InstructionText=styled.div`
padding: 10px;
align-self: center;
@media (max-width: 1050px) {
    text-align: left;
    width: calc(min(90vw, 500px));
}
`;

export default function IntroductoryScreen(props) {
    return (
        <IntroductoryPage>
            <h1>Movie Information</h1>
            <SearchBar name={props.name} setSearch={props.setName} />
            <InstructionText>
                Once a list of movies is found, you can click on any movie card to view more details about it.
            </InstructionText>
        </IntroductoryPage>)
}
