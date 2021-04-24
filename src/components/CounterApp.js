import React,{useState} from 'react'
import './counter.css';

const CounterApp = ()=>{
    const [state, setstate] = useState(
        {counter1:0,
         counter2:0
        })
        const {counter1,counter2} = state;
    return(
        <>
            <h1 className=''>CounterApp {counter1}</h1>
            <h1 className=''>CounterApp {counter2}</h1>
            <button className='btn btn-primary p-2'
            onClick={()=>{
                setstate({...state,
                    counter1: counter1 + 1})
            }}>+1</button>
            <button className='btn btn-primary p-2 m-2'
            onClick={()=>{
                
                setstate({
                    ...state,
                    counter2:counter2 - 1})
            }}>-1</button>
        </>
    );
}



export default CounterApp;