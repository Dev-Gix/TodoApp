import React, { useRef,useLayoutEffect,useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';
import './layaout.css';

const Layaout = () => {

    const { increment, state } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { quote } = !!data && data[0];
    const [boxSize, setboxSize] = useState({})

    useLayoutEffect(() => {
        
        setboxSize(pTag.current.getBoundingClientRect())
        
    }, [quote])

    const pTag = useRef()
     console.log()
    return (
        <div>
            <h1>Layaout</h1>
            <hr />
            <blockquote className="blackquot  text-end">
                <p className="mb-0"
                ref={pTag}>{quote}</p>
                <pre>{JSON.stringify(boxSize,null,3)}</pre>

            </blockquote>
            <div className="float-end">
                <button className='btn btn-primary' onClick={increment}>Siguiente Quote</button>
            </div>



        </div>
    );
};



export default Layaout;