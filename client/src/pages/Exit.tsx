import React from 'react';
import { useAction } from '../hook/useAction';
import { useTranslation } from 'react-i18next';

const Exit: React.FC = () => {
    const { t } = useTranslation()
    const { loginExit } = useAction();

    const exit = async () => {
        await loginExit()
    }

    return (
        <div className='btn__exit' onClick={exit}>
            <span>{t('header.exit')}</span>
        </div>
    );
};

export default Exit;