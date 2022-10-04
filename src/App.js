import React from 'react';
import {Route, Routes} from "react-router-dom";
import DescriptionPage from "./DescriptionPage";
import Home from "./Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about/:id" element={<DescriptionPage />} />
        </Routes>    );
}

export default App;