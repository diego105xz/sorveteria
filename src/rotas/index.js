import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; 

import Home from '../paginas/Home';
import Sabores from '../paginas/Sabores';
import Sobre from '../paginas/Sobre';

function Rotas(){
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/sabores' element={<Sabores/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
            </Routes>
        </HashRouter>
    );
}

export default Rotas;