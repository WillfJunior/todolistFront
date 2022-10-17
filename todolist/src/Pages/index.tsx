import axios from 'axios';
import { useEffect, useState } from 'react';
import { Todo } from '../Components/Todos/Index';
import { Result, Todos } from '../Models/Todos';
import { api } from '../Services/api';
import './index.css'

export const TodoList = () => {
    const [value , setValue] = useState(false);
    const handleChange = () => {
        console.log(value)
        setValue(!value)
    }
    
    const [todos, setTodos] = useState<Todos[]>([])
    useEffect(() => {
        const loadTodos = async () => {
            const response = await fetch("https://localhost:7029/todos");

            const responseBody = await response.json();

            if(response.ok){
                console.log(responseBody)
                setTodos(responseBody)
                console.log(todos)
            }
        }
        loadTodos();
    },[setTodos])

    return (
        <>
            <h1>Todo List</h1>
            <button>New Todo</button>
            <div className='container'>
                {todos.map((todo,index) => {
                    return(
                        <Todo description={todo.Description}
                        value
                        handleChange={handleChange}
                        />
                    )
                    
                })}
            </div>
        </>
    )
}