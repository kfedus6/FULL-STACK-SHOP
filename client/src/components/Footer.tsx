import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation()

    return (
        <div>
            <p>{t('footer.title')}</p>
        </div>
    );
};

export default Footer;