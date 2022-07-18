import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useAction } from './hook/useAction';

const App: React.FC | any = () => {

    const { authorization } = useAction();

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        await authorization()
    }

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )

};

export default App;
