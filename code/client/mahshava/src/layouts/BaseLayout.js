import React from 'react';
import BaseLayoutRoutes from './BaseLayoutRoutes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar';
import style from './BaseLayout.module.css';
import MahshavaTable from '../components/table/table';

const BaseLayout = () => {
    return (
        <div className={style.baseLayoutContainer}>
            {/*<AsapErrorDialog />*/}
            <div className={style.headerContainer}>
                <Header />
            </div>
            <div className={style.sidebarContainer}>
                <Sidebar />
            </div>
            <div className={style.baseLayoutContent}>
                <main>
                    <BaseLayoutRoutes />
                </main>
            </div>
            <div>
                <MahshavaTable />
            </div>
            <div className={style.footerContainer}>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
