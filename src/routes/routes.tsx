import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Pokemon from '../pages/Pokemon';
import Pokemoninfo from "../pages/infoPokemon";

export default function mainRoutes() {
    
    return (
        //Rotas
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Pokemon/>}/>
                    <Route path="pokemon/:id" element={<Pokemoninfo/>}/>
                </Routes>
            </Router>
        </>
    );
}

