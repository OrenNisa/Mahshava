import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useIntl } from 'react-intl';
import ActionsButton from './ActionsButton';

const AdminMainViewTable = () => {
    const { formatMessage } = useIntl();
    // these are arbitrary values, can be changed
    const tableWidth = 800;
    const tableHeight = 400;
    const pageSize = 4;

    const columns = [
        {
            field: 'id',
            hide: 'true',
        },
        {
            field: 'school',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.school.text' }),
            flex: 1.5,
        },
        {
            field: 'communicationDetails',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.communicationDetails.text' }),
            flex: 0.3,
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
        <div style={{ height: tableHeight, width: tableWidth }}>
            <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={[5]} />
        </div>
    );
};

export default AdminMainViewTable;
