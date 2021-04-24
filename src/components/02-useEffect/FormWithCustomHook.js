import React,{useEffect} from 'react';
import './effects.css';
import {useForm} from '../../Hooks/useForm'

const FormWithCustomHook = () => {
  
  const [Formsvalue, handleInputChange] = useForm({
    name: '',
    email: '',
    password:''
  });
    const { name, email,password } = Formsvalue;
    
    useEffect(() => {
      console.log('Email Cambio')
     
    }, [email]) 
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(Formsvalue);
    }

  return (
    <form onSubmit={handleSubmit}>
    <h1>FormWithCustomHook</h1>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Tu nombre"
          name="name"
          type="text"
          autoComplete="off"
          value={name || ''}
          onChange={handleInputChange}></input>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Tu Email"
          name="email"
          type="text"
          autoComplete="off"
          value={email || ''}
          onChange={handleInputChange}></input>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="****"
          name="password"
          type="password"
          value={password || ''}
          onChange={handleInputChange}></input>
      </div>
      <button type="submit"
              className="btn btn-primary p-2"
      >Guardar</button>
    </form>
  );
}


export default FormWithCustomHook;