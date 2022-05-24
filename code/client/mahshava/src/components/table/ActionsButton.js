import React from 'react';
import { useIntl } from 'react-intl';
import { Button } from '@mui/material';
import {useSchoolProcesses} from "../../SchoolsContext";
import {useNavigate} from "react-router";



const ActionButton = (props) => {
    const { formatMessage } = useIntl();
    const {setCurrentProcessID} = useSchoolProcesses();
    let navigate = useNavigate();

    const handleClick = () => {
        setCurrentProcessID(props.ProcessID);
        navigate("/preliminary-report")
    };

    return (
        <Button variant="contained" size={'small'} onClick={handleClick}>
            {formatMessage({ id: 'actions-button.editText' })}
        </Button>
    );
};

export default ActionButton;
