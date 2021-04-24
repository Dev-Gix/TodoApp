import React from 'react'
import TodoListItem from './TodoListItem'

export default function TodoList({todos,handleToggle,handleDelete}) {
    
    return (
        
    <ul className="list-group list-group-flush">
            {todos.map((item,index) => {
               
                return (
                    <TodoListItem key={item.id} todoItem ={item} index={index} handleToggle={handleToggle} handleDelete={handleDelete}/>
                )
            })
            }

        </ul>
    )
}
