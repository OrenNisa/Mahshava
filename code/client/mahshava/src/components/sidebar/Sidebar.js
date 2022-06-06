import React from 'react';
import SidebarItem from './SidebarItem';
import useRouting from '../../services/routing/hooks/useRouting';
import style from './Sidebar.module.css';

const Sidebar = () => {
    const { routesMetadataForRole } = useRouting();

    const links = routesMetadataForRole.slice(0, 5).map(({ id, path, LogoComponent, i18nKey, isUnderConstruction }) => (
        <SidebarItem
            key={id}
            path={path}
            i18nId={i18nKey}
            LogoComponent={LogoComponent}
            isUnderConstruction={isUnderConstruction}
        />
    ));

    return <div className={style.sidebarContainer}>{links}</div>;
};

export default Sidebar;
