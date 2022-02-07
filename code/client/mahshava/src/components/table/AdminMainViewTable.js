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
            school: 'sapir',
            communicationDetails: 'טל פסיכולוגית',
            stepInProcess: 'הערכת חוסן שאלון',
            recentActivity: '05/09/2021',
            taskToPerform: 'אישור שאלות שאלון',
        },
    ];

    return (
        <div className={style.appointmentsContainer}>
            <DataGrid rows={rows} columns={columns} autoPageSize />
        </div>
    );
};

export default AdminMainViewTable;
