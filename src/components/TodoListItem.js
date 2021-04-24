import React from 'react'

export default function TodoListItem({todoItem,index,handleToggle,handleDelete}) {
    
    return (

        <li className="list-group-item d-flex justify-content-between" key={todoItem.id}>
            
            <p onClick={() => { handleToggle(todoItem.id) }}

               className={`${todoItem.done && 'text-decoration-line-through'}`}

               >{index+1}. {todoItem.desc} </p>

            <button onClick={() => { handleDelete(todoItem.id) }}
                    className="btn btn-danger ">Borrar</button>
        </li>


    )
}
