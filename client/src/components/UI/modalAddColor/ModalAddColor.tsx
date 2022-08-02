import React from 'react';
import { useTranslation } from 'react-i18next';
import '../modalAddColor/modalAddColor.css';

const ModalAddColor = ({ createColor, color, setColor }: any) => {
    const { t } = useTranslation()

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h4 className="modal-title" id="exampleModalLabel">{t('modalAddColor.title')}</h4>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('modalAddColor.input')}
                            aria-label="Color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}>
                        </input>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-dark"
                            data-bs-dismiss="modal"
                            onClick={createColor}>
                            {t('modalAddColor.btn')}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalAddColor;