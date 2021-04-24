import React from 'react';
import useFetch from '../../Hooks/useFetch';
import {useCounter} from '../../Hooks/useCounter'

const MultipleCustomHook = () => {
    
    const {increment,state} = useCounter(1);
    const { data, loading  } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author,quote} = !!data && data[0];
    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />
            {loading ? 
            (<div className='alert alert-info text-center'>
                Loading...
            </div>) 
            : 
            (<blockquote className="blackquot  text-end">
                <p className="mb-0">{quote}</p>
                <footer className="bloquote-footer">-{author}</footer>
            </blockquote>)}
            <div className="float-end">
            <button  className='btn btn-primary' onClick={increment}>Siguiente Quote</button>
            </div>
           
            

        </div>
    );
};



export default MultipleCustomHook;