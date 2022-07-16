import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const LoadingTitle=styled.div`
font-weight: bold;
`;

export default function Loading() {
    return (
        <LoadingTitle>
            <p>Loading</p>
            <div>
                <ScaleLoader speedMultiplier={0.8} color="black" />
            </div>
            <p>Please wait</p>
        </LoadingTitle>
    )
}
