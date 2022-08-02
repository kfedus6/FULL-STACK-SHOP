import React from 'react';
import { useTranslation } from 'react-i18next';
import '../modalAddImage/modalAddImage.css';

const ModalAddImage = ({ setImg, setColorId, createImg, productColor }: any) => {
    const { t } = useTranslation()

    return (
        <div className="modal fade" id="exampleModalImg" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h4 className="modal-title" id="exampleModalLabel">{t('modalAddImg.title')}</h4>
                    </div>
                    <div className="modal-body">
                        <select className="form-select mb-2" onChange={(e) => setColorId(e.target.value)} >
                            <option defaultValue='Color'>Color</option>
                            {productColor.map((item: { id: number, color: string }) => {
                                return (
                                    <option key={item.id} value={item.id}>{item.color}</option>
                                )
                            })}
                        </select>
                        <div className="input-group">
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => setImg(e.target.files)}>
                            </input>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-dark"
                            data-bs-dismiss="modal"
                            onClick={createImg}>
                            {t('modalAddImg.btn')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalAddImage;