import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useAction } from './hook/useAction';

import { IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/locales';
import { messages } from './i18n/messages';

const App: React.FC | any = () => {
    const [currentLocale, setCaurrentLocale] = useState(getInitialLocale());

    const handleChange = (e: any) => {
        setCaurrentLocale(e.target.value);
        localStorage.setItem("locale", e.target.value);
    };

    function getInitialLocale() {
        const savedLocale = localStorage.getItem("locale")
        return savedLocale || LOCALES.ENGLISH
    }

    const { authorization } = useAction();

    useEffect(() => {
        checkUser()
    }, [])

    const checkUser = async () => {
        await authorization()
    }

    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
            <BrowserRouter>
                <AppRouter currentLocale={currentLocale} handleChange={handleChange} />
            </BrowserRouter>
        </IntlProvider>
    )

};

export default App;
