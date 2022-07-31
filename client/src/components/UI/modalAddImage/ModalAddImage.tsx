import React from 'react';
import '../modalAddImage/modalAddImage.css';

const ModalAddImage = ({ visibleImg, setImg, setColorId, createImg, productColor }: any) => {

    if (visibleImg === false) {
        return (
            <div className='modal-image'>
                <div className='modal__content-image'>
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-image act'>
                <div className='modal__content-image'>
                    <div className='image-body'>
                        <h1>Create Image Product</h1>
                        <div className='image-form'>
                            <select onChange={(e) => setColorId(e.target.value)} >
                                <option defaultValue='Color'>Color</option>
                                {productColor.map((item: { id: number, color: string }) => {
                                    return (
                                        <option key={item.id} value={item.id}>{item.color}</option>
                                    )
                                })}
                            </select>
                            <div>
                                <input type="file" onChange={(e) => setImg(e.target.files)} />
                            </div>
                            <div>
                                <button onClick={createImg}>create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ModalAddImage;