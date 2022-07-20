import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTranslation } from 'react-i18next';
import '../styles/newPassword.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockAlt } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsEyeSlash } from 'react-icons/bs';

const NewPassword = () => {
    const navigate = useNavigate()

    const { t } = useTranslation()

    const [type, setType] = useState('password')

    const [email, setEmail]: any = useState('')
    const [password, setPassword]: any = useState('')

    const { newPassword } = useAction()

    const update = (e: any) => {
        e.preventDefault()
        newPassword(email, password)
        setEmail('')
        setPassword('')
        navigate('/authorization')
    }

    const changeType = (e: any) => {
        e.preventDefault()
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    return (
        <div className='form-new-password'>
            <div className='form'>
                <h1 className='title'>SHOP</h1>
                <div className='info'>
                    <span>{t('newpassword.info')}.</span>
                </div>
                <form className='forgot-password'>
                    <div className='input-field'>
                        <input
                            type="text"
                            placeholder={t('newpassword.placeholder_email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className='icon email'><HiOutlineMail /></i>
                    </div>
                    <div className='input-field'>
                        <input
                            type={type}
                            placeholder={t('newpassword.placeholder_pw')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className='icon lock'><BiLockAlt /></i>
                        {type === 'password' ?
                            <i className='icon eye open' >
                                <button onClick={changeType}>
                                    <AiOutlineEye />
                                </button>
                            </i>
                            :
                            <i className='icon eye' >
                                <button onClick={changeType}>
                                    <BsEyeSlash />
                                </button>
                            </i>
                        }
                    </div>
                    <div className='input-field button'>
                        <input type="button" value={t('newpassword.button')} onClick={update} />
                    </div>
                    <div className='login-signup'>
                        <span className='text'>{t('newpassword.span_return')}
                            <a href='#' className='text signup-text' onClick={() => navigate('/authorization')} > {t('newpassword.login')}!</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default NewPassword;