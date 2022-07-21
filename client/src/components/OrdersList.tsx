import React from 'react'
import OrderItem from './OrdersItem'
import ModalOrders from './UI/modalOrders/ModalOrders'

const OrdersList = ({ t, products, checked, setChecked, orders, setSearchOrders }: any) => {

    return (
        <div className='orders'>
            <div>
                <h2 className='orders-title'>{t('orders.title')}</h2>
                <div className='orders-search'>
                    <input type="search" placeholder={t('orders.search') + '...'} onChange={(e) => setSearchOrders(e.target.value)} />
                </div>
            </div>
            <div className='orders-client-container'>
                <div className='orders-items'>
                    {products.orders.map((item: any) => {
                        let date = item.updatedAt.split('-')
                        let dateDay = date[2]
                        dateDay = dateDay.slice(0, 2)
                        let status;
                        if (item.status === false) {
                            status = t('orders.status_false')
                        } else if (item.status === true) {
                            status = t('orders.status_true')
                        } else {
                            status = t('orders.status')
                        }
                        return (
                            <OrderItem key={item.id} item={item} date={date} dateDay={dateDay} status={status} t={t} />
                        )
                    })}
                </div>
            </div>
            <ModalOrders checked={checked} setChecked={setChecked} orders={orders} t={t} />
        </div>
    )
}

export default OrdersList;