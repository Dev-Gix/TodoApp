import './counter.css';
import {useCounter} from './Hooks/useCounter';
const CounterWithCustomHook = ()=>{
    const {decrement,increment,reset,state}=useCounter();
    return(
        <>
        <h1>Counter With Hook: {state}</h1>
          <hr></hr>
          <button className='btn btn-primary m-2 p-3' onClick={()=>increment(1)}>+1</button>
          <button className='btn btn-primary m-2 p-3' onClick={reset}>Reset</button>
          <button className='btn btn-primary p-3' onClick={()=>decrement(2)}>-1</button>

        </>
    );
}

export default CounterWithCustomHook;