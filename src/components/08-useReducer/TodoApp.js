import React, { useEffect, useReducer } from 'react';
import TodoList from '../TodoList';
import TodoAdd from './TodoAdd';
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    const handleDelete = (id) => {
       
         const action = {
            type: "delete",
            payload: { id }
        }
        dispatch(action); 

    }

    const handleToggle = (id)=>{
       dispatch({
           type:'toggle',
           payload:{id}
       })
    }


    const handleaddTodo = (newTodo)=>{
        dispatch({
            type:"add",
            payload:newTodo
        });
    }
    
    return (
        <div className="container w-75">

            <h1>TodoApp <small>{todos.length}</small></h1>
            <hr />

            <div className="row ">

                <div className="col-7  align-top">

                    <TodoList  todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
                       
                </div>

                <div className="col-5">

                <TodoAdd handleaddTodo={handleaddTodo}/>
               
                </div>
                    
            </div>
        </div>
    );
}

export default TodoApp;