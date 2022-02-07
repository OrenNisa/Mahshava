import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from '@mui/material';
import style from './Sidebar.module.css';
import { useMatch, useResolvedPath } from 'react-router';

const SidebarItemContent = ({ i18nId, LogoComponent, match }) => {
    return (
        <div className={style.sidebarItemContainer} style={{ backgroundColor: match ? '#ffffff' : 'transparent' }}>
            <LogoComponent />
            <div>
                <FormattedMessage id={i18nId} />
            </div>
        </div>
    );
};

const SidebarItem = ({ path, i18nId, LogoComponent, isUnderConstruction }) => {
    const resolved = useResolvedPath(path);
    const match = useMatch({ path: resolved.pathname, end: true });
    const content = <SidebarItemContent i18nId={i18nId} LogoComponent={LogoComponent} match={match} />;
    return (
        <div>
            {isUnderConstruction ? (
                <div>{content}</div>
            ) : (
                <div>
                    <Link to={path} className={style.link}>
                        {content}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
