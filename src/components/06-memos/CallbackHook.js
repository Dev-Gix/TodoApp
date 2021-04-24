import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';


const CallbackHook = () => {
const [Counter, setCounter] = useState(10);

/* const increment = ()=>{
    setCounter(Counter + 1);
} */

const increment = useCallback(() => {
    setCounter(c => c+ 1);
    },[setCounter]
);

    return (
        <div>
            <h1>CallBack: {Counter}</h1>
            <hr/>
                 <ShowIncrement increment={increment}/>
        </div>
    );
};



export default CallbackHook;