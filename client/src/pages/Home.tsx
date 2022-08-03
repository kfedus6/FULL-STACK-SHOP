import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiTwotoneDelete } from 'react-icons/ai';
import { RiImageAddFill } from 'react-icons/ri';
import ModalAddCarouselImg from '../components/UI/modalAddCarouselImg/ModalAddCarouselImg';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const Home = () => {
    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [img, setImg] = useState('')

    const { fetchPostCarousel, fetchGetCarousel, fetchDeleteCarousel } = useAction()

    const { carouselImages }: any = useTypedSelector(state => state.products)
    const { is_admin }: any = useTypedSelector(state => state.user)

    useEffect(() => {
        fetchGetCarousel()
    }, [])

    const addImageCarousel = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', img[0])
        setName('')
        fetchPostCarousel(formData)
    }

    const deleteImage = (id: any) => {
        fetchDeleteCarousel(id)
    }

    if (is_admin === false) {
        return (
            <div className='container-lg d-flex justify-content-center aling-items-center content-home' >
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {carouselImages.map((item: any) => {
                            return (
                                <div className="carousel-item active" key={item.id}>
                                    <img
                                        src={process.env.REACT_APP_API_URL + item.image}
                                        className="d-block carousel-size" alt={item.name}>
                                    </img>
                                </div>
                            )
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <ModalAddCarouselImg
                    name={name}
                    setName={setName}
                    setImg={setImg}
                    addImageCarousel={addImageCarousel}
                />
            </div>
        )
    } else {
        return (
            <div className='container-lg d-flex justify-content-center aling-items-center content-home'>
                {Object.keys(carouselImages).length === 0
                    ?
                    <div className='container-lg d-flex justify-content-center aling-items-center content-home'>
                        <button
                            type="button"
                            className="btn btn-dark btn-lg"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCarousel">
                            {t('home.btn')}
                        </button>
                        <ModalAddCarouselImg
                            name={name}
                            setName={setName}
                            setImg={setImg}
                            addImageCarousel={addImageCarousel}
                        />
                    </div>
                    :
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {carouselImages.map((item: any) => {
                                return (
                                    <div className="carousel-item active" key={item.id}>
                                        <img
                                            src={process.env.REACT_APP_API_URL + item.image}
                                            className="d-block carousel-size" alt={item.name}>
                                        </img>
                                        <div className='btn-group-carousel'>
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-sm mx-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModalCarousel">
                                                {t('home.btn_create')}
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-sm"
                                                onClick={() => deleteImage(item.id)}>
                                                {t('home.btn_delete')}
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                }
                <ModalAddCarouselImg
                    name={name}
                    setName={setName}
                    setImg={setImg}
                    addImageCarousel={addImageCarousel}
                />
            </div>
        )
    }
}

export default Home;