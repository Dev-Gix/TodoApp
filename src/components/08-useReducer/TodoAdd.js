import React from 'react'
import { useForm } from '../../Hooks/useForm'

export default function TodoAdd({handleaddTodo}) {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        handleaddTodo(newTodo);
        reset()
    }

    return (

        <form onSubmit={handleSubmit} className="bg-secondary rounded">
        
        <h3>Agregar Tarea</h3>

        <input className="form-control"
            name="description"
            type="text"
            autoComplete="off"
            placeholder="Aprender..."
            onChange={handleInputChange}
            value={description}
        ></input>

        <button type="submit" className="btn btn-success  m-2">Agregar</button>
    </form>

    )
}
