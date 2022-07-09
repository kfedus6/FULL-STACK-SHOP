import React, { FormEvent } from 'react'
import { NavLink } from 'react-router-dom';

const OrderItem = ({ item, date, dateDay, status }: any) => {

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
                    <button>Замовлення</button>
                </NavLink>
            </div>
        </div>
    )
};

export default OrderItem;