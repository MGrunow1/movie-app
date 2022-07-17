import styled from "styled-components";
import prev from "../page_prev_min.svg";
import next from "../page_next_min.svg";

const ButtonImage=styled.img`
height: 27px;
`;

const PaginatorButton=styled.button`
background-color: aliceblue;
border: 0px none aliceblue;
margin-left: 1px;
margin-right: 1px;
padding-top: 5px;
font-size: calc(10px + 2vmin);
`;

const PaginatorSection=styled.div`
display: flex;
justify-content: center;
margin-top: 4px;
margin-bottom: 7px;
`;

export default function Paginator(props) {
    // destructure props into variables
    const { page, setPage, maxPages } = props.pagedata;
    
    // subtract 1 unless page number is already 1
    function prevPage() {
        let currentPage = page;
        currentPage = (currentPage > 1) ? currentPage - 1 : 1;
        setPage(currentPage);
    }

    // add 1 unless page is already at the last page
    function nextPage() {
        let currentPage = page;
        currentPage = (currentPage < maxPages) ? currentPage + 1 : maxPages;
        setPage(currentPage);
    }

    return(
        <PaginatorSection>
            {// only show "previous" button if there is a page before
            (page > 1) &&
            <PaginatorButton onClick={prevPage}>
                <ButtonImage src={prev} alt="previous page" />
            </PaginatorButton>
            }
            <div>Page {page} of {maxPages}</div>
            {// only show "next" button if there is page after
            (page < maxPages) &&
            <PaginatorButton onClick={nextPage}>
                <ButtonImage src={next} alt="next page" />
            </PaginatorButton>
            }
        </PaginatorSection>
    )
}
