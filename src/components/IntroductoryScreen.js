import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const IntroductoryPage=styled.div`
${(props) => props.dark
  ? `color: white;
    background-color: darkblue;`
  : `color: black;
    background-color: aliceblue;`
}
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
    const [firstSearch, setFirstSearch] = useState(props.name);
    const setSearch = props.setSearch;
    const { theme } = useContext(ThemeContext);
    
    // update global search value when SearchBar gets a result
    // (App.js will unmount this component and mount Home)
    useEffect(() => {
        setSearch(firstSearch);
    }, [firstSearch, setSearch]);

    return (
        <IntroductoryPage dark={theme === 'dark'}>
            <h1>Movie Information</h1>
            <SearchBar name={firstSearch} setSearch={setFirstSearch} />
            <InstructionText>
                Once a list of movies is found, you can click on any movie card to view more details about it.
            </InstructionText>
        </IntroductoryPage>)
}
