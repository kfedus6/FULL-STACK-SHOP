import React from 'react';
import { useAction } from '../hook/useAction';

const Exit = () => {

    const { loginExit } = useAction();

    const exit = async () => {
        await loginExit()
    }

    return (
        <button onClick={exit}>Вийти</button>
    );
};

export default Exit;