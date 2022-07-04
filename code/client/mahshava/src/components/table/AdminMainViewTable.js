import {
    DataGrid,
    heIL,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarFilterButton
} from '@mui/x-data-grid';
import {useIntl} from 'react-intl';
import ActionsButton from './ActionsButton';
import style from './AdminMainViewTable.module.css';

import {Avatar, Typography} from "@mui/material";
import {deepOrange} from "@mui/material/colors";

const AdminMainViewTable = (props) => {
    const {formatMessage} = useIntl();

    const createDataArray = (array) => {
        let arr = [];
        let len = array.length;
        for (let i = 0; i < len; i++) {
            let processID = array[i].id
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
                id: processID,
                //it is done like this for filter and sort to get working
                school: [schoolName, schoolCity, schoolDistrict, schoolPicture].join(','),
                communicationDetails: [contactName, contactMail, contactphone].join(','),
                stepInProcess: [processName, tasksName].join(','),
                recentActivity: lastActionDate,
                taskToPerform: ''
            });
        }
        return arr;
    }

    const columns = [
        {
            field: 'school',
            align: 'left',
            headerAlign: 'center',
            headerName: formatMessage({id: 'admin-main-view-table.school.text'}),
            flex: 1,
            valueGetter: (params) => {
                return params.value
            },
            renderCell: function (params) {
                const data = params.value.split(',');
                return (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar alt={data[0]} src={data[3]}
                                sx={{width: '1.5em', height: '1.5em', bgcolor: deepOrange[500]}}/>
                        <span style={{marginRight: '0.5em'}}>
                            <Typography variant='inherit'>בית ספר {data[0]}</Typography>
                            <Typography variant='inherit' color="textSecondary">{data[1]}, {data[2]}</Typography>
                        </span>
                    </div>
                );
            }
        },
        {
            field: 'communicationDetails',
            align: 'left',
            headerAlign: 'center',
            headerName: formatMessage({id: 'admin-main-view-table.communicationDetails.text'}),
            flex: 1.2,
            valueGetter: (params) => {
                return params.value
            },
            renderCell: function (params) {
                const data = params.value.split(',');
                return (
                    <div>
                        <Typography variant='inherit'>{data[0]}-</Typography>
                        <Typography variant='inherit' color="textSecondary"
                                    fontSize='80%'>{data[1]} | {data[2]}</Typography>
                    </div>
                );
            }
        },
        {
            field: 'stepInProcess',
            align: 'center',
            headerAlign: 'center',
            disableColumnMenu: true,
            headerName: formatMessage({id: 'admin-main-view-table.stepInProcess.text'}),
            flex: 0.5,
            valueGetter: (params) => {
                return params.value
            },
            renderCell: function (params) {
                const data = params.value.split(',');
                return (
                    <div>
                        <Typography variant='inherit'>{data[0]}-</Typography>
                        <Typography variant='inherit' color="textSecondary" fontSize='90%'>{data[1]}</Typography>
                    </div>
                );
            }
        },
        {
            field: 'recentActivity',
            type: 'date',
            align: 'center',
            headerAlign: 'center',
            headerName: formatMessage({id: 'admin-main-view-table.recentActivity.text'}),
            flex: 0.5,
        },
        {
            field: 'taskToPerform',
            align: 'center',
            headerAlign: 'center',
            disableColumnMenu: true,
            headerName: formatMessage({id: 'admin-main-view-table.taskToPerform.text'}),
            flex: 0.5,
            renderCell: (params) => <ActionsButton ProcessID={params.id}/>,
        },
    ];

    const rows = createDataArray(props.schoolProcesses);

    const CustomToolbar = () => {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton/>
                <GridToolbarFilterButton/>
            </GridToolbarContainer>
        );
    };

    return (
        <div className={style.appointmentsContainer}>
            <DataGrid rows={rows}
                      columns={columns}
                      localeText={heIL.components.MuiDataGrid.defaultProps.localeText}
                      components={{Toolbar: CustomToolbar}}
            />
        </div>
    );
};

export default AdminMainViewTable;
