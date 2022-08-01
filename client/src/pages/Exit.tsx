import React from 'react';
import { useAction } from '../hook/useAction';
import { useTranslation } from 'react-i18next';

const Exit: React.FC = () => {
    const { t } = useTranslation()
    const { loginExit } = useAction();

    const exit = () => {
        loginExit()
    }

    return (
        <a className='nav-link' onClick={exit}>
            {t('header.exit')}
        </a>
    );
};

export default Exit;