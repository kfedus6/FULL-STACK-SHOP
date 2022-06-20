import React from 'react';
import { useAction } from '../hook/useAction';

const Exit: React.FC = () => {

    const { loginExit } = useAction();

    const exit = async () => {
        await loginExit()
    }

    return (
        <div className='btn__exit' onClick={exit}>Вийти</div>
    );
};

export default Exit;