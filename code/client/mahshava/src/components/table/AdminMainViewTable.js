import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useIntl } from 'react-intl';
import ActionsButton from './ActionsButton';
import apiService from '../../services/api/api';
import { useEffect, useState } from 'react';

const AdminMainViewTable = () => {
    const { formatMessage } = useIntl();
    const [rows, setRows] = useState([]);

    const getTableData = () => {
        apiService.AppointmentService.getAppointment().then(response => {
            makeRowsData(response);
        });
    };

    useEffect(() => {
        getTableData();
    }, []);

    useEffect(() => {
        console.log(rows);
    }, [rows]);

    const makeRowsData = data => {
        setRows(
            data.map(element => {
                return {
                    image: element['contact_info_image'],
                    id: element['id'],
                    school: element['school_name'],
                    communicationDetails: element['contact_info_name'],
                    stepInProcess: element.process[0]['stage_in_process'],
                    recentActivity: element.process[0]['last_activity'],
                    taskToPerform: element.process[0]['task_to_preform'],
                };
            })
        );
    };

    // these are arbitrary values, can be changed
    const tableWidth = 1200;
    const tableHeight = 400;
    const pageSize = 4;

    const columns = [
        {
            field: 'image',
            renderCell: params => <img src={params.formattedValue} alt={'profile'} />,
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

    return (
        <div style={{ height: tableHeight, width: tableWidth }}>
            <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={[5]} />
        </div>
    );
};

export default AdminMainViewTable;
