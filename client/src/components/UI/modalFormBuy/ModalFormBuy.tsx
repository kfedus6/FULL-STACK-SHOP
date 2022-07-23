import React from 'react';
import '../modalFormBuy/modalFormBuy.css';

const ModalBuy = ({ children, visibleBuy }: any) => {

    if (visibleBuy === false) {
        return (
            <div className='modal-form-buy'>
                <div className='modal__content-form-buy'>
                    {children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-form-buy act'>
                <div className='modal__content-form-buy'>
                    {children}
                </div>
            </div>
        )
    }
};

export default ModalBuy;