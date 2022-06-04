import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useTypedSelector } from './hook/useTypedSelector';
import AdminPanel from './pages/AdminPanel';
import Authhorization from './pages/Authhorization';
import Category from './pages/Category';
import Exit from './pages/Exit';
import Home from './pages/Home';
import NewProduct from './pages/NewProduct';
import Products from './pages/Products';

const App: React.FC = () => {

    const user = useTypedSelector(state => state.user)

    if (user.is_login === false && user.is_admin === false) {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='category' element={<Category />} />
                    <Route path='newProduct' element={<NewProduct />} />
                    <Route path='authorization' element={<Authhorization />} />
                </Route>
            </Routes>
        )
    } else if (user.is_login === true && user.is_admin === false) {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='category' element={<Category />} />
                    <Route path='newProduct' element={<NewProduct />} />
                    <Route path='exit' element={<Exit />} />
                </Route>
            </Routes>
        )
    } else if (user.is_admin === true && user.is_login === true) {
        return (
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='category' element={<Category />} />
                    <Route path='newProduct' element={<NewProduct />} />
                    <Route path='adminPanel' element={<AdminPanel />} />
                    <Route path='exit' element={<Exit />} />
                </Route>
            </Routes>
        )
    }
    //REDIRECT NA страничку ошибки
    return <h1>qwe</h1>
};

export default App;
