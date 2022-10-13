import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Todos } from '../Models/Todos';
import { api } from '../Services/api';

export const TodoList = () => {
    const [todos, setTodos] = useState<Todos[]>([])

    const LoadTodos = async () => {
        await api.get<Todos[]>(`todos`)
            .then(() => console.log('aqui'))
            
    }

    useEffect(() => {
        LoadTodos()
    },[setTodos])

    return (
        <>
            <h1>Todo List</h1>
            <button>New Todo</button>
            <div className='container'>
                {todos.map((todo,index) => (
                    <p>{todo.Description}</p>
                ))}
            </div>
        </>
    )
}