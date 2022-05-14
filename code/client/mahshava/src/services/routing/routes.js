import Login from '../../components/auth/Login';
import Home from '../../components/mahshava-admin/Home';
import { ROLES } from '../../constants';
import MainPageLogo from '../../components/sidebar/logo/MainPageLogo';
import AddSchoolLogo from '../../components/sidebar/logo/AddSchoolLogo';
import DataBaseLogo from '../../components/sidebar/logo/DataBaseLogo';
import HistorySchoolLogo from '../../components/sidebar/logo/HistorySchoolLogo';
import HelpLogo from '../../components/sidebar/logo/HelpLogo';
import PreliminaryReport from "../../components/PreliminaryReport/PreliminaryReport";


const ROUTE_LOGIN = 'login';
const MAHSHAVA_ADMIN_HOME = 'home';
const MAHSHAVA_ADMIN_ADD_SCHOOL = 'add-school';
const MAHSHAVA_ADMIN_SCHOOL_HISTORY = 'school-history';
const MAHSHAVA_ADMIN_DATA_SOURCES = 'data-sources';
const MAHSHAVA_ADMIN_HELP = 'help';
const MAHSHAVA_ADMIN_PRELIMINARY_REPORT = 'preliminary-report'


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
        LogoComponent: MainPageLogo,
        i18nKey: 'routes.mahshava-admin-home',
    },
    {
        id: MAHSHAVA_ADMIN_ADD_SCHOOL,
        path: `/${MAHSHAVA_ADMIN_ADD_SCHOOL}`,
        isUnderConstruction: true,
        Component: Home,
        isProtected: true,
        roles: [ROLES.MAHSHAVA_ADMIN],
        LogoComponent: AddSchoolLogo,
        i18nKey: 'routes.mahshava-admin-add-school',
    },
    {
        id: MAHSHAVA_ADMIN_SCHOOL_HISTORY,
        path: `/${MAHSHAVA_ADMIN_SCHOOL_HISTORY}`,
        isUnderConstruction: true,
        Component: Home,
        isProtected: true,
        roles: [ROLES.MAHSHAVA_ADMIN],
        LogoComponent: HistorySchoolLogo,
        i18nKey: 'routes.mahshava-admin-school-history',
    },
    {
        id: MAHSHAVA_ADMIN_DATA_SOURCES,
        path: `/${MAHSHAVA_ADMIN_DATA_SOURCES}`,
        isUnderConstruction: true,
        Component: Home,
        isProtected: true,
        roles: [ROLES.MAHSHAVA_ADMIN],
        LogoComponent: DataBaseLogo,
        i18nKey: 'routes.mahshava-admin-data-sources',
    },
    {
        id: MAHSHAVA_ADMIN_HELP,
        path: `/${MAHSHAVA_ADMIN_HELP}`,
        isUnderConstruction: true,
        Component: Home,
        isProtected: true,
        roles: [ROLES.MAHSHAVA_ADMIN],
        LogoComponent: HelpLogo,
        i18nKey: 'routes.mahshava-admin-help',
    },
    {
        id: MAHSHAVA_ADMIN_PRELIMINARY_REPORT,
        path: `/${MAHSHAVA_ADMIN_PRELIMINARY_REPORT}`,
        isUnderConstruction: true,
        Component: PreliminaryReport,
        isProtected: true,
        roles: [ROLES.MAHSHAVA_ADMIN],
        LogoComponent: HelpLogo,
        i18nKey: 'routes.mahshava-admin-preliminary-report',
    },
];
