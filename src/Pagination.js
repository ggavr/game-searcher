import React from 'react';
import PaginationBtn from "./PaginationBtn";
import {pagesCount} from "./constants/api";

function Pagination() {
    const mapSource = [...Array(pagesCount)];

    return (
        <div className='pagination-row'>
            {
                mapSource.map((el, i) => <PaginationBtn number={i + 1}/>)
            }
        </div>
    );
}

export default Pagination;