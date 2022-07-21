import React from 'react'
import { NavLink } from 'react-router-dom';

const OrderItem = ({ item, date, dateDay, status, t }: any) => {

    return (
        <div className='orders-item'>
            <div className='item-content'>
                <div className='item-id'>
                    <span>{item.id}.</span>
                </div>
                <div className='item-name'>
                    <span>{item.name}</span>
                </div>
                <div className='item-date'>
                    <span>{dateDay}.{date[1]}.{date[0]}</span>
                </div>
                <div className='item-status'>
                    <span>{status}</span>
                </div>
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