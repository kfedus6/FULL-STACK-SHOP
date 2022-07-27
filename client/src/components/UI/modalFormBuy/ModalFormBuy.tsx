import React from 'react';
import { useTranslation } from 'react-i18next';
import '../modalFormBuy/modalFormBuy.css';

const ModalBuy = ({ visibleBuy, sendProduct, name, setName, phone, setPhone }: any) => {
    const { t } = useTranslation()

    if (visibleBuy === false) {
        return (
            <div className='modal-form-buy'>
                <div className='modal__content-form-buy'>
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-form-buy act'>
                <div className='modal__content-form-buy'>
                    <div className='model-block'>
                        <h2>{t('basketproducts.orders')}</h2>
                        <div className='block-buy'>
                            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="tel" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='block-buy-btn'>
                            <button onClick={sendProduct}>{t('basketproducts.buy')}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ModalBuy;