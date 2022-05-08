import { DataGrid } from '@mui/x-data-grid';
import { useIntl } from 'react-intl';
import ActionsButton from './ActionsButton';
import style from './AdminMainViewTable.module.css';

import {Avatar, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";

const AdminMainViewTable = (props) => {
    const { formatMessage } = useIntl();

    const createDataArray = (array) => {
        let arr = [];
        let len = array.length;
        for (let i = 0; i < len; i++) {
            let schoolName = array[i].schoolID.schoolName
            let schoolCity = array[i].schoolID.city
            let schoolDistrict = array[i].schoolID.district
            let schoolPicture = array[i].schoolID.pic
            let contactName = array[i].contactID.contactName
            let contactMail = array[i].contactID.email
            let contactphone = array[i].contactID.phone
            let processName = array[i].processID.processName
            let tasksName = array[i].processID.taskID.taskName
            let lastActionDate = array[i].lastActionDate
            arr.push({
                id: i+1,
                school: {firstRow: 'בית ספר ' + schoolName, secRow: schoolCity + ', ' + schoolDistrict, pic: schoolPicture},
                communicationDetails: {firstRow: contactName + '-', secRow: contactMail + ' | ' + contactphone},
                stepInProcess: {firstRow: processName + '-', secRow: tasksName},
                recentActivity: lastActionDate,
                taskToPerform:''
            });
        }
        return arr;
    }

    const columns = [
        {
            field: 'school',
            align: 'left',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.school.text' }),
            flex: 1,
            renderCell: (params) => (
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar alt={params.value.schoolName} src={params.value.pic} sx={{ width: '1.5em', height: '1.5em', bgcolor: deepOrange[500] }}/>
                    <span style={{marginRight: '0.5em'}}>
                        <Typography variant='inherit'>{params.value.firstRow}</Typography>
                        <Typography variant='inherit' color="textSecondary">{params.value.secRow}</Typography>
                    </span>
                </div>
            ),
        },
        {
            field: 'communicationDetails',
            align: 'left',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.communicationDetails.text' }),
            flex: 1.2,
            renderCell: (params) => (
                <div>
                    <Typography variant='inherit'>{params.value.firstRow}</Typography>
                    <Typography variant='inherit' color="textSecondary" fontSize='80%'>{params.value.secRow}</Typography>
                </div>
            ),
        },
        {
            field: 'stepInProcess',
            align: 'center',
            headerAlign: 'center',
            disableColumnMenu: true,
            headerName: formatMessage({ id: 'admin-main-view-table.stepInProcess.text' }),
            flex: 0.5,
            renderCell: (params) => (
                <div>
                    <Typography variant='inherit'>{params.value.firstRow}</Typography>
                    <Typography variant='inherit' color="textSecondary">{params.value.secRow}</Typography>
                </div>
            ),
        },
        {
            field: 'recentActivity',
            type: 'date',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({ id: 'admin-main-view-table.recentActivity.text' }),
            flex: 0.5,
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

    const rows = createDataArray(props.schoolProcesses);

    return (
        <div className={style.appointmentsContainer}>
            <DataGrid rows={rows} columns={columns}  />
        </div>
    );
};

export default AdminMainViewTable;
