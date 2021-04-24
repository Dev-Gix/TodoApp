import React, { useState } from 'react';
import MultipleCustomHook from '../03-example/MultipleCustomHook';

const RealExampleRef = () => {
    const [show, setshow] = useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            {show && <MultipleCustomHook />}
            
            <button className='btn btn-primary mt-5' onClick={()=>{
                setshow(!show)
            }}>Show/Hide</button>
        </div>
    );
};



export default RealExampleRef;