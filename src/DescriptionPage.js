import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {RAWG_API} from "./constants/api";
import parse from "html-react-parser";

function DescriptionPage() {

  let {id} = useParams()
    const [descr, setDescr] = useState({
        name:'',
        description: ''
    })

    const getGameDescription = async () => {
        let url = new URL(`https://api.rawg.io/api/games/${id}`);
        url.searchParams.append('key', RAWG_API);

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setDescr(()=> data)
            // dispatch(setGamesRedux(data.results))
            console.log(data)
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
            getGameDescription()
    },[])


    return (
        <div className='description-card'>
            <h4>MY ID ID: {id}</h4>
            <h2>{descr?.name}</h2>
            <img className='card--image' src={descr.background_image} alt='imageof..'/>

            <div>{parse(descr?.description)}</div>
        </div>
    );
}

export default DescriptionPage;