import React from "react";
import {useSelector} from "react-redux";
import Form from "./Form";
import GameCardList from "./GameCardList";
import Pagination from "./Pagination";

function Home() {
    // const dispatch = useDispatch()
    const {games} = useSelector((state) => state.storeReducer);

    return (

        <div>
            <Form />
            <Pagination />
            <GameCardList games={games}/>
        </div>



    );
}

export default Home;
