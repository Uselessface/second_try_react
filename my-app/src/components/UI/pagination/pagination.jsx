import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages,page,setPage}) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className='pagination'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => setPage(p)}
                    className={page === p ? 'page_number current_page' : 'page_number'}>
                            {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;
