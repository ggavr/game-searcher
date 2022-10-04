import React from 'react';
import {setPage} from "./redux/storeReducer";
import {useDispatch, useSelector} from "react-redux";

function PaginationBtn(props) {
    // const handleClick = (page) => dispatch(setPage(page))
    const dispatch = useDispatch()
    const {currentPage} = useSelector((state) => state.storeReducer);

    return (
        <button className={currentPage === props.number ? 'selected-btn' : 'disabled-btn' } onClick={()=>dispatch(setPage(props.number))}>{props.number}</button>
    );
}

export default PaginationBtn;