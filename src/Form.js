import React, {useEffect} from 'react';
import {setGamesRedux, setQuery} from "./redux/storeReducer";
import {cardCount, RAWG_API} from "./constants/api";
import {useDispatch, useSelector} from "react-redux";

function Form() {

    const dispatch = useDispatch()
    const {currentQuery, currentPage} = useSelector((state) => state.storeReducer);

    const searchGameByName = async () => {
        let url = new URL("https://api.rawg.io/api/games");
        url.searchParams.append('key', RAWG_API);
        url.searchParams.append('search', currentQuery);
        url.searchParams.append('page_size', cardCount.toString());
        url.searchParams.append('page', currentPage);

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data)
            dispatch(setGamesRedux(data.results))
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        searchGameByName()
    },[currentQuery, currentPage])


    const handleSubmit = (e) => {
        e.preventDefault()
        searchGameByName()    }

    const handleChange = (e) => dispatch(setQuery(e.target.value))

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label className="label" htmlFor="query">Game <span className='label--s'>S</span>earch</label>
            <input className="input"
                   type="text"
                   name="query"
                   placeholder="Search game"
                   value={currentQuery}
                   onChange={handleChange}

            />
            <button className="button"
                    type="submit">Search</button>
        </form>
    );
}

export default Form;