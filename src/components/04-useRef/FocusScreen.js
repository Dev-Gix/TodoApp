import React,{useRef} from 'react';


const FocusScreen = () => {
    const Inputref = useRef();

    const handleFocus= ()=>{
        Inputref.current.select()
    }
    return (
        <div>
            <h1>Focus Screen</h1> 
            <hr/>
            <input 
                    ref={Inputref}
                    className="form-control"
                    placeholder="Su nombre"></input>
                    <button onClick={handleFocus} className="btn btn-primary mt-5">Focus</button>
        </div>
    );
};


export default FocusScreen;