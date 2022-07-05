import React from 'react';
import '../modal/modal.css';

const Modal = ({ children, error, fetchError }: any) => {

    const err = () => {
        fetchError()
    };

    if (error === null) {
        return (
            <div className='modal'>
                <div className='modal__content'>
                    {children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal act' onClick={err}>
                <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }
};

export default Modal;