import React from 'react'
import '../modalOrders/modalOrders.css';

const ModalOrders = ({ checked, setChecked, orders, t }: any) => {

    if (checked === false) {
        return (
            <div className='modal-orders'>
                <div className='modal__content-orders'>
                </div>
            </div>
        )
    }
    return (
        <div className='modal-orders act'>
            <div className='modal__content-orders' onClick={() => setChecked(false)}>
                <div className='modal-orders-block'>
                    <h1>{t('orders.modal_title')}!</h1>
                    <p>{t('orders.modal_p')}!!!</p>
                    {orders.map((item: any) => {
                        return (
                            <div className='modal-item-body' key={item.id}>
                                <span>{t('orders.span_client')} № <strong>{item.id}</strong></span>
                                <div className='modal-name-phone'>
                                    <div className='modal-item-name'>
                                        <span>{t('orders.item_name')}: {item.name}</span>
                                    </div>
                                    <div>
                                        <span>{t('orders.item_phone')}: {item.phone}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ModalOrders;