import React,{useState} from 'react';
import './effects.css';

const SimpleForm = ()=>{
    const [Formstate, setFormstate] = useState({
        name:'' ,
        email:''
    })

    const {name,email} = Formstate;

       const handleInputChange = ({target})=>{
           setFormstate({
               ...Formstate,
               [target.name]:target.value
           })
       }

    return(
        <><h1>FormWithCustomHook</h1>
        <div className="form-group">
            <input 
            className="form-control"
            placeholder="Tu nombre"
            name="name"
            type="text"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}></input>
        </div>
        <div className="form-group">
            <input 
            className="form-control"
            placeholder="Tu Email"
            name="email"
            type="text"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}></input>
        </div>
        </>
    );
}

export default SimpleForm;