import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../styles/header.css';
import '../styles/footer.css';

const Layout = (props: any) => {
    return (
        <div className='layout'>
            <header>
                <Header currentLocale={props.currentLocale} handleChange={props.handleChange} />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;