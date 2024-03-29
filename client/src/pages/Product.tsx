import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAction } from '../hook/useAction'
import { useTypedSelector } from '../hook/useTypedSelector'
import { ImCross } from 'react-icons/im';

import '../styles/product.css';

const Product = () => {
    const { id }: any = useParams()

    const navigate = useNavigate()

    const { fetchProduct, fetchAddComment, fetchGetComments, fetchDeleteComments, fetchGetProductColor, fetchGetImagesProduct, fetchAddBasketProduct, fetchGetImageProduct } = useAction();
    const { product, imagesProduct, comments, productColor }: any = useTypedSelector(state => state.products)
    const { user }: any = useTypedSelector(state => state)

    const [text, setText]: any = useState('')
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')

    useEffect(() => {
        fetchProduct(id)
        fetchGetProductColor(id)
        fetchGetImageProduct(id)
    }, [])

    useEffect(() => {
        fetchGetComments(id)
    }, [comments])

    const addComment = () => {
        fetchAddComment(id, text)
        setText('')
    }

    const deleteComment = (commentId: any) => {
        fetchDeleteComments(commentId)
    }

    const sendColor = (id: any, color: any) => {
        fetchGetImagesProduct(id)
        setColor(color)
    }

    const sendBasket = () => {
        fetchAddBasketProduct(id, color, size)
    }

    if (user.is_admin === true) {
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
                                <h3>{product.name}</h3>
                                <span>{product.price} &#8372;</span>
                                <div className='items-color'>
                                    {productColor.map((c: any) => {
                                        return (
                                            <div className='item-color' key={c.id}>
                                                <button onClick={() => sendColor(c.id, c.color)}>{c.color}</button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='items-size'>
                                    {Object.keys(product).length !== 0 ?
                                        product.info.map((size: any) => {
                                            if (size.name == 'size') {
                                                return (
                                                    <div className='item-size' key={size.id}>
                                                        <button onClick={() => setSize(size.description)}>{size.description}</button>
                                                    </div>
                                                )
                                            }
                                        })
                                        :
                                        <div>loading...</div>
                                    }
                                </div>
                                <div className='btn-add-basket'>
                                    <button onClick={sendBasket}>Add to cart</button>
                                </div>
                                <div className='comments'>
                                    <h2>Comments</h2>
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
                            </div>
                        </section>
                    </div>
                </div >
            </div >
        )
    } else {
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
                                <h3>{product.name}</h3>
                                <span>{product.price} &#8372;</span>
                                <div className='items-color'>
                                    {productColor.map((c: any) => {
                                        return (
                                            <div className='item-color' key={c.id}>
                                                <button onClick={() => sendColor(c.id, c.color)}>{c.color}</button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='items-size'>
                                    {Object.keys(product).length !== 0 ?
                                        product.info.map((size: any) => {
                                            if (size.name == 'size') {
                                                return (
                                                    <div className='item-size' key={size.id}>
                                                        <button onClick={() => setSize(size.description)}>{size.description}</button>
                                                    </div>
                                                )
                                            }
                                        })
                                        :
                                        <div>loading...</div>
                                    }
                                </div>
                                <div className='btn-add-basket'>
                                    <button>Add to cart</button>
                                </div>
                                {user.is_login === true
                                    ?
                                    <div className='comments'>
                                        <h2>Comments</h2>
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
                                                        <p>{comment.text}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    :
                                    <div className='comments'>
                                        <h2>Comments</h2>
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
                                                        <p>{comment.text}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        )
    }
};

export default Product