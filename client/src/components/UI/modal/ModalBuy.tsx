import React from 'react';
import '../modal/modal.css';

const ModalBuy = ({ children, visibleBuy, setVisibleBuy }: any) => {

    if (visibleBuy === false) {
        return (
            <div className='modal'>
                <div className='modal-buy-content'>
                    {children}
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal act' onClick={() => setVisibleBuy(false)}>
                <div className='modal-buy-content'>
                    {children}
                </div>
            </div>
        )
    }
};

export default ModalBuy;