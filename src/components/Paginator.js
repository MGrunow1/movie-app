//
export default function Paginator(props) {
    const lastPage = props.maxPages;
    function prevPage() {
        let currentPage = props.page;
        currentPage = (currentPage > 1) ? currentPage-1 : 1;
        props.setPage(currentPage);
    }
    function nextPage() {
        let currentPage = props.page;
        currentPage = (currentPage < lastPage) ? currentPage + 1 : lastPage;
        props.setPage(currentPage);
    }

    return(
        <div className="Paginator">
            <button
             className="PaginatorButton"
             onClick={prevPage}>
                &lt;</button>
            <div>Page {props.page} of {lastPage}</div>
            <button
             className="PaginatorButton"
             onClick={nextPage}>
                &gt;</button>
        </div>
    )
}