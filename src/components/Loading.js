import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const LoadingTitle=styled.div`
font-weight: bold;
`;

/*
FontAwesome icons that could work for spinner:
spinner, circle-notch, arrow-rotate-right, rotate-right
*/

/* have displayed for short time, only during process
 of fetching and maybe briefly after to give minimum
 time, for aesthetics */

export default function Loading() {
    console.log(":loading!!!")
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
