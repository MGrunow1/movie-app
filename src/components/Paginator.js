import styled from "styled-components";

const PaginatorButton=styled.button`
background-color: #282c34;
color: aliceblue;
margin-left: 3px;
margin-right: 3px;
padding: 1px;
font-size: calc(10px + 2vmin);
`;

const PaginatorSection=styled.div`
display: flex;
justify-content: center;
margin-top: 4px;
margin-bottom: 7px;
`;

export default function Paginator(props) {
    const lastPage = props.maxPages;
    function prevPage() {
        let currentPage = props.page;
        currentPage = (currentPage > 1) ? currentPage - 1 : 1;
        props.setPage(currentPage);
    }
    function nextPage() {
        let currentPage = props.page;
        currentPage = (currentPage < lastPage) ? currentPage + 1 : lastPage;
        props.setPage(currentPage);
    }

    return(
        <PaginatorSection>
            <PaginatorButton onClick={prevPage}>
                &lt;
            </PaginatorButton>
            <div>Page {props.page} of {lastPage}</div>
            <PaginatorButton onClick={nextPage}>
                &gt;
            </PaginatorButton>
        </PaginatorSection>
    )
}
