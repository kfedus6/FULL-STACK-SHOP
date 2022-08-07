import React from 'react'
import { useTranslation } from 'react-i18next';

const ModalDelete = ({ deleteSomething }: any) => {
    const { t } = useTranslation()

    return (
        <div className="modal fade" id="exampleModalDelete" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center aling-items-center">
                        <h4 className="modal-title" id="exampleModalLabel">{t('modalDelete.title')}!</h4>
                    </div>
                    <div className="modal-body d-flex justify-content-center aling-items-center">
                        {t('modalDelete.text')}?
                    </div>
                    <div className="modal-footer d-flex justify-content-center aling-items-center">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal"
                            onClick={deleteSomething}>
                            {t('modalDelete.btn_yes')}
                        </button>
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">
                            {t('modalDelete.btn_no')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete;