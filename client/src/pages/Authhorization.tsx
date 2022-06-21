import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockAlt } from 'react-icons/bi';
import { BsEyeSlash } from 'react-icons/bs';

const Authhorization: React.FC = () => {

    const { user } = useTypedSelector(state => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.is_login) {
            navigate('/')
        }
    }, [user])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const { login, registration } = useAction();

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

    if (check === false) {
        return (
            <div className='container'>
                <div className='forms'>
                    <div className='form login'>
                        <span className='title'>Увійти</span>
                        <form>
                            <div className='input-field' >
                                <input
                                    value={email}
                                    placeholder='Email'
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)} required />
                                <i className='icon email'><HiOutlineMail /></i>
                            </div>
                            <div className='input-field'>
                                <input
                                    value={password}
                                    placeholder='Password'
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)} />
                                <i className='icon lock'><BiLockAlt /></i>
                                <i className='icon eye'><BsEyeSlash /></i>
                            </div>
                            <div className='input-field button'>
                                <input type="button" value='Увійти' onClick={loginOrRegister} />
                            </div>
                            <div className='login-signup'>
                                <span className='text'>Ще не учасник?
                                    <a href='#' className='text signup-text' onClick={() => setCheck(true)}>Зареєструватись!</a>
                                </span>
                            </div>
                            {/*  <div>
                                <button onClick={loginOrRegister}>Увійти</button>
                            </div>
                            <div onClick={() => setCheck(true)} className='user__auth-reg-div'>Зареєструватись!</div> */}
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
                    <span className='title'>Зареєструватись</span>
                    <form>
                        <div className='input-field' >
                            <input
                                value={email}
                                placeholder='Email'
                                type="text"
                                onChange={(e) => setEmail(e.target.value)} required />
                            <i className='icon email'><HiOutlineMail /></i>
                        </div>
                        <div className='input-field'>
                            <input
                                value={password}
                                placeholder='Password'
                                type="password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <i className='icon lock'><BiLockAlt /></i>
                            <i className='icon eye'><BsEyeSlash /></i>
                        </div>
                        <div className='input-field button'>
                            <input type="button" value='Зареєструватись' onClick={loginOrRegister} />
                        </div>
                        <div className='login-signup'>
                            <span className='text'>Ви вже є учасником?
                                <a href='#' className='text signup-text' onClick={() => setCheck(false)}>Увійти!</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        /*   <form className='user__form'>
              <div className='user__auth-reg-input'>
                  <input
                      value={email}
                      placeholder='Email'
                      type="text"
                      onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='user__auth-reg-input'>
                  <input
                      value={password}
                      placeholder='Password'
                      type="text"
                      onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='user__auth-reg-btn'>
                  <button onClick={loginOrRegister}>Зареєструватись</button>
              </div>
              <div onClick={() => setCheck(false)} className='user__auth-reg-div'>Увійти!</div>
          </form > */
    )

};

export default Authhorization;


