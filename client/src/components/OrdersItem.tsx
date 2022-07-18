import React, { FormEvent } from 'react'
import { NavLink } from 'react-router-dom';

const OrderItem = ({ item, date, dateDay, status, t }: any) => {

    return (
        <div className='orders-item'>
            <div className='item-content'>
                <span>{item.id}.</span>
                <span>{item.name}</span>
                <span>{dateDay}.{date[1]}.{date[0]}</span>
                <span>{status}</span>
            </div>
            <div>
                <NavLink to={`orderProduct/${item.id}`}>
                    <button>{t('orders.orders')}</button>
                </NavLink>
            </div>
        </div>
    )
};

export default OrderItem;