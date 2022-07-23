import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAction } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'
import { ImCross } from 'react-icons/im';

import '../styles/product.css';

const Product = () => {
    const { id }: any = useParams()

    const navigate = useNavigate()

    const { fetchProduct, fetchGetImagesProduct, fetchAddComment, fetchGetComments, fetchDeleteComments } = useAction();
    const { product, imagesProduct, comments }: any = useTypedSelector(state => state.products)
    const { user }: any = useTypedSelector(state => state)

    const [text, setText]: any = useState('')

    useEffect(() => {
        fetchProduct(id)
        fetchGetComments(id)
    }, [])

    useEffect(() => {
        if (Object.keys(product).length != 0) {
            for (let item of product.info) {
                if (item.name === 'color') {
                    fetchGetImagesProduct(id, item.description)
                }
            }
        }
    }, [product])

    const addComment = () => {
        fetchAddComment(id, text)
        setText('')
    }

    const deleteComment = (commentId: any) => {
        fetchDeleteComments(commentId)
    }

    return (
        <div className='product'>
            <div className='product-content'>
                <div className='grid-product'>
                    <section>
                        <div className='product-items'>
                            {imagesProduct.map((img: any) => {
                                return (
                                    <div className='product-img' key={img.id}>
                                        <img src={process.env.REACT_APP_API_URL + img.img} alt="product" />
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2>{product.name}</h2>
                            <span>{product.price} &#8372;</span>
                        </div>
                    </section>
                </div>
            </div>
            {user.is_login === true
                ?
                <div className='comments'>
                    <div className='comments-add'>
                        <input type="text" placeholder='Comment' value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={addComment}>create</button>
                    </div>
                    <div className='comment-items'>
                        {comments.map((comment: any) => {
                            let date = comment.updatedAt.split('-')
                            let dateDay = date[2]
                            dateDay = dateDay.slice(0, 2)
                            return (
                                <div className='comment-body' key={comment.id}>
                                    <span>{dateDay}.{date[1]}.{date[0]}</span>
                                    <button className='comment-delete' onClick={() => deleteComment(comment.id)} ><ImCross /></button>
                                    <p>{comment.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :
                <div className='comments'>
                    <div className='comments-add'>
                        <input type="text" placeholder='Comment' value={text} onChange={(e) => setText(e.target.value)} />
                        <button onClick={() => navigate('/authorization')}>create</button>
                    </div>
                    <div className='comment-items'>
                        {comments.map((comment: any) => {
                            let date = comment.updatedAt.split('-')
                            let dateDay = date[2]
                            dateDay = dateDay.slice(0, 2)
                            return (
                                <div className='comment-body' key={comment.id} >
                                    <span>{dateDay}.{date[1]}.{date[0]}</span>
                                    <button className='comment-delete' onClick={() => deleteComment(comment.id)} ><ImCross /></button>
                                    <p>{comment.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }

        </div >
    )
};

export default Product