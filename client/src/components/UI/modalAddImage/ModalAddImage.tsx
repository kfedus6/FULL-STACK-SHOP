import React from 'react';
import '../modalAddImage/modalAddImage.css';

const ModalAddImage = ({ visibleImg, setImg, color, setColor, createImg }: any) => {

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
                        <div className='image-input'>
                            <input type="text" placeholder='Color' value={color} onChange={(e) => setColor(e.target.value)} />
                            <input type="file" onChange={(e) => setImg(e.target.files)} />
                            <div>
                                <button onClick={createImg}>create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalAddImage;