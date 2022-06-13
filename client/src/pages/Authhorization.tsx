import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const Authhorization: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const { login, registration } = useAction();

    const navigate = useNavigate();

    const user = useTypedSelector(state => state.user);

    const loginOrRegister = async (e: FormEvent) => {
        e.preventDefault()
        if (check === false) {
            navigate('/')
            await login(email, password)
        } else {
            await registration(email, password)
        }
        setEmail('')
        setPassword('')
    };

    if (check === false) {
        return (
            <form className='user__form'>
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
                    <button onClick={loginOrRegister}>Увійти</button>
                </div>
                <div onClick={() => setCheck(true)} className='user__auth-reg-div'>Зареєструватись!</div>
            </form >
        )
    }
    return (
        <form className='user__form'>
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
        </form >
    )
};

export default Authhorization;