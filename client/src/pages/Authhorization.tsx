import React, { useEffect, useState } from 'react';
import { useAction } from '../hook/useAction';

const Authhorization = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authorization } = useAction()

    useEffect(() => {
        authorization("pashaNotAdmin@gmail.com", "passWR")
    }, [])

    const newUser = (e: any) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    };

    console.log(email)
    console.log(password)

    return (
        <form>
            <input
                value={email}
                placeholder='Email'
                type="text"
                onChange={(e) => setEmail(e.target.value)} />
            <input
                value={password}
                placeholder='Password'
                type="text"
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={newUser}>click</button>
        </form >
    );
};

export default Authhorization;