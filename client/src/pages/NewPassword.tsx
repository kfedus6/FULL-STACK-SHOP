import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hook/useAction';
import '../styles/newPassword.css';

const NewPassword = () => {
    const [email, setEmail]: any = useState('')
    const [password, setPassword]: any = useState('')

    const navigate = useNavigate()
    const { newPassword } = useAction()

    const send = (e: any) => {
        e.preventDefault()
        newPassword(email, password)
        setEmail('')
        setPassword('')
        navigate('/authorization')
    }

    return (
        <form className='forgot-password'>
            <div>
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={send}>send</button>
            </div>
        </form>
    )
};

export default NewPassword;