import Login from '../../components/auth/Login';
import Home from '../../components/mahshava-admin/Home';
import { ROLES } from '../../constants';

const ROUTE_LOGIN = 'login';
const MAHSHAVA_ADMIN_HOME = 'home';

export const LOGIN_ROUTE = {
    id: ROUTE_LOGIN,
    path: `/${ROUTE_LOGIN}`,
    Component: Login,
    isProtected: false,
    roles: [],
};

export const ROUTES = [
    LOGIN_ROUTE,
    {
        id: MAHSHAVA_ADMIN_HOME,
        path: `/${MAHSHAVA_ADMIN_HOME}`,
        Component: Home,
        isProtected: true,
        roles: [ROLES.MAHSHAVA_ADMIN],
        i18nKey: 'routes.mahshava-admin-home',
    },
];
