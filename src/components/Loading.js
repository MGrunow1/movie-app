import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const LoadingTitle=styled.div`
font-weight: bold;
`;

export default function Loading() {
    const { theme } = useContext(ThemeContext);
    const scaleColor = (theme === "dark") ? "white" : "black";
    return (
        <LoadingTitle>
            <p>Loading</p>
            <div>
                <ScaleLoader speedMultiplier={0.8} color={scaleColor} />
            </div>
            <p>Please wait</p>
        </LoadingTitle>
    )
}
