import React from 'react';
import BaseLayoutRoutes from './BaseLayoutRoutes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationSidebar from '../components/sidebar/NavigationSidebar';
import style from './BaseLayout.module.css';

const BaseLayout = () => {
    return (
        <div className={style.baseLayoutContainer}>
            {/*<AsapErrorDialog />*/}
            <div className={style.headerContainer}>
                <Header />
            </div>
            <div className={style.sidebarContainer}>
                <NavigationSidebar />
            </div>
            <div className={style.baseLayoutContent}>
                <main>
                    <BaseLayoutRoutes />
                </main>
            </div>
            <div className={style.footerContainer}>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
