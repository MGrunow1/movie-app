import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

const ToggleSection=styled.div`
${(props) => props.dark
  ? `color: white;
    background-color: darkblue;`
  : `color: black;
    background-color: aliceblue;`
}
`;

export default function LightDarkToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
    <ToggleSection dark={theme === 'dark'}>
        <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </ToggleSection>
    )
}
