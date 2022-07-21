import React from 'react';
import '../modalError/modalError.css';

const Modal = ({ error, fetchError, t }: any) => {

    const err = () => {
        fetchError()
    };

    if (error === null) {
        return (
            <div className='modal-error'>
                <div className='modal__content-error'>
                    <div className='error__admin-panel'>
                        <span>{t('adminpanel.error')}</span>
                    </div>
                    <div className='error__text'>
                        <span>{error}</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-error act' onClick={err}>
                <div className='modal__content-error' onClick={(e) => e.stopPropagation()}>
                    <div className='error__admin-panel'>
                        <h2>{t('adminpanel.error')}</h2>
                    </div>
                    <div className='error__text'>
                        <span>{error}</span>
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;