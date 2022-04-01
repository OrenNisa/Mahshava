import React from 'react';
import { useIntl } from 'react-intl';
import { useMahshavaContext } from '../../services/state/MahshavaContextProvider';

const HeaderUser = () => {
    const { asapUser } = useMahshavaContext();
    const { formatMessage } = useIntl();

    return (
        <label>
            {formatMessage({ id: 'header.user.message' })}: {asapUser?.first_name} {asapUser?.last_name}
        </label>
    );
};

export default HeaderUser;

