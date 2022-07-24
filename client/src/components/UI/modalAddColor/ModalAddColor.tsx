import React from 'react';
import '../modalAddColor/modalAddColor.css';

const ModalAddColor = ({ visibleColor, createColor, color, setColor }: any) => {


    if (visibleColor === false) {
        return (
            <div className='modal-color'>
                <div className='modal__content-color'>
                </div>
            </div>
        )
    } else {
        return (
            <div className='modal-color act'>
                <div className='modal__content-color'>
                    <div className='body-add-color'>
                        <h1>Color Product</h1>
                        <div className='info-color'>
                            <input type="text" placeholder='Color' value={color} onChange={(e) => setColor(e.target.value)} />
                            <div>
                                <button onClick={createColor}>create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalAddColor;