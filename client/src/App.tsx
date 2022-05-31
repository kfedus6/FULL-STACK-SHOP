import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Authhorization from './pages/Authhorization';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='authorization' element={<Authhorization />} />
            </Route>
        </Routes>
    );
};

export default App;
