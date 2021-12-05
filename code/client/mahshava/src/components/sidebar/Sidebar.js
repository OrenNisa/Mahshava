import React from 'react';
import useRouting from '../../services/routing/hooks/useRouting';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button } from '@mui/material';
import style from './Sidebar.module.css';

const Sidebar = () => {
    const { routesMetadataForRole } = useRouting();

    const links = routesMetadataForRole.map(({ id, path, i18nKey }) => (
        <Button variant="contained" key={id} className={style.link}>
            <Link to={path}>
                <FormattedMessage id={i18nKey} />
            </Link>
        </Button>
    ));

    return <div className={style.sidebarContainer}>{links}</div>;
};

export default Sidebar;
