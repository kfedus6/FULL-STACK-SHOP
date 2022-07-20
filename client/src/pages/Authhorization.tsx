import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockAlt } from 'react-icons/bi';
import { BsEyeSlash } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai'
import { useTranslation } from 'react-i18next';
import '../styles/authorization.css';

const Authhorization: React.FC = () => {
    const navigate = useNavigate();

    const { login, registration } = useAction();
    const { user }: any = useTypedSelector(state => state);

    const [type, setType] = useState('password')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const { t } = useTranslation()

    useEffect(() => {
        if (user.is_login) {
            navigate('/')
        }
    }, [user])

    const loginOrRegister = async (e: FormEvent) => {
        e.preventDefault()
        if (check === false) {
            await login(email, password)
        } else {
            await registration(email, password)
        }
        setEmail('')
        setPassword('')
    };

    const changeType = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    if (check === false) {
        return (
            <div className='container'>
                <div className='forms'>
                    <div className='form login'>
                        <h1 className='title'>SHOP</h1>
                        <form>
                            <div className='input-field' >
                                <input
                                    value={email}
                                    placeholder={t('authorization.placeholder')}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)} required />
                                <i className='icon email'><HiOutlineMail /></i>
                            </div>
                            <div className='input-field'>
                                <input
                                    value={password}
                                    placeholder={t('authorization.placeholder_pw')}
                                    type={type}
                                    onChange={(e) => setPassword(e.target.value)} />
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
                            <div className='forgot__password'>
                                <a href='#' onClick={() => navigate('/NewPassword')}>{t('authorization.password')}?</a>
                            </div>
                            <div className='input-field button'>
                                <input type="button" value={t('authorization.title')} onClick={loginOrRegister} />
                            </div>
                            <div className='login-signup'>
                                <span className='text'>{t('authorization.span')}?
                                    <a href='#' className='text signup-text' onClick={() => setCheck(true)}>{t('authorization.registration')}!</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className='forms'>
                <div className='form login'>
                    <h1 className='title'>SHOP</h1>
                    <form>
                        <div className='input-field' >
                            <input
                                value={email}
                                placeholder={t('authorization.placeholder')}
                                type="text"
                                onChange={(e) => setEmail(e.target.value)} required />
                            <i className='icon email'><HiOutlineMail /></i>
                        </div>
                        <div className='input-field'>
                            <input
                                value={password}
                                placeholder={t('authorization.placeholder_pw')}
                                type={type}
                                onChange={(e) => setPassword(e.target.value)} />
                            <i className='icon lock'><BiLockAlt /></i>
                            {type === 'password' ?
                                <i className='icon eye' >
                                    <button onClick={changeType}>
                                        <BsEyeSlash />
                                    </button>
                                </i>
                                :
                                <i className='icon eye open' >
                                    <button onClick={changeType}>
                                        <AiOutlineEye />
                                    </button>
                                </i>
                            }
                        </div>
                        <div className='input-field button sign'>
                            <input type="button" value={t('authorization.registration')} onClick={loginOrRegister} />
                        </div>
                        <div className='login-signup'>
                            <span className='text'>{t('authorization.span_is')}?
                                <a href='#' className='text signup-text' onClick={() => setCheck(false)}>{t('authorization.title')}!</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Authhorization;


