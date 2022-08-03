import React from 'react'
import { useTranslation } from 'react-i18next'

const ModalAddCarouselImg = ({ name, setName, setImg, addImageCarousel }: any) => {
    const { t } = useTranslation()

    return (
        <div className="modal fade" id="exampleModalCarousel" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h4 className="modal-title" id="exampleModalLabel">{t('modalAddCarouselImg.titel')}</h4>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={t('modalAddCarouselImg.input')}
                            aria-label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                        <div className="input-group mt-2">
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
                            onClick={addImageCarousel}>
                            {t('modalAddCarouselImg.btn')}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalAddCarouselImg