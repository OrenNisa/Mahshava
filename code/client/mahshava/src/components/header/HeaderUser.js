import React from 'react';
import { useIntl } from 'react-intl';
import { useMahshavaContext } from '../../services/state/MahshavaContextProvider';

const HeaderUser = () => {
    const { mahshavaUser } = useMahshavaContext();
    const { formatMessage } = useIntl();

    return (
        <label>
            {formatMessage({ id: 'header.user.message' })}: {mahshavaUser?.first_name} {mahshavaUser?.last_name}
        </label>
    );
};

export default HeaderUser;

