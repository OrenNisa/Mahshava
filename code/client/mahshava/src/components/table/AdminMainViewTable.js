import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useIntl } from 'react-intl';
import ActionsButton from './ActionsButton';
import style from './AdminMainViewTable.module.css';

const AdminMainViewTable = () => {
    const { formatMessage } = useIntl();

    const columns = [
        {
            field: 'school',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.school.text' }),
            flex: 1,
        },
        {
            field: 'communicationDetails',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.communicationDetails.text' }),
            flex: 1,
        },
        {
            field: 'stepInProcess',
            align: 'center',
            headerAlign: 'center',
            disableColumnMenu: true,
            headerName: formatMessage({ id: 'admin-main-view-table.stepInProcess.text' }),
            flex: 1,
        },
        {
            field: 'recentActivity',
            type: 'date',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.recentActivity.text' }),
            flex: 1,
        },
        {
            field: 'taskToPerform',
            align: 'center',
            headerAlign: 'center',
            disableColumnMenu: true,
            headerName: formatMessage({ id: 'admin-main-view-table.taskToPerform.text' }),
            flex: 0.5,
            renderCell: () => <ActionsButton />,
        },
    ];

    const rows = [
        //data example
        {
            id: 1,
            school:'בית ספר הרואה, שדרות' ,
            communicationDetails: 'טל פסיכולוגית',
            stepInProcess: 'הערכת חוסן שאלון',
            recentActivity: '05/09/2021',
            taskToPerform: 'אישור שאלות שאלון',
        },
        {
            id: 2,
            school:'בית ספר גל',
            communicationDetails: 'יונה פסיכולוגית',
            stepInProcess: 'תוכנית התערבות-המתנה לתשובות',
            recentActivity: '05/09/2021',
            taskToPerform: 'בניית תוכנית התערבות',
        },
        {
            id: 3,
            school:'בית ספר הרואה',
            communicationDetails: 'יונה פסיכולוגית',
            stepInProcess: 'תוכנית התערבות',
            recentActivity: '05/09/2021',
            taskToPerform: 'אישור שאלות שאלון',
        },
        {
            id: 4,
            school:'בית ספר היובל',
            communicationDetails: 'יונה פסיכולוגית',
            stepInProcess: 'מדידה חוזרת-המתנה לדו"ח',
            recentActivity: '05/09/2021',
            taskToPerform: 'בניית תוכנית התערבות',
        },
        {
            id: 2,
            school:'בית ספר גל',
            communicationDetails: 'יונה פסיכולוגית',
            stepInProcess: 'תוכנית התערבות-המתנה לתשובות',
            recentActivity: '05/09/2021',
            taskToPerform: 'בניית תוכנית התערבות',
        },
    ];

    return (
        <div className={style.appointmentsContainer}>
            <DataGrid rows={rows} columns={columns} autoPageSize />
        </div>
    );
};

export default AdminMainViewTable;
