import React, { useState } from "react";
import NewToDoForm from "./newToDoForm";
import ToDo from "./toDo";

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const add = toDoObject => {
        setTodos(todos => [...todos, toDoObject]);
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const toDoComponents = todos.map(todo => (
        <ToDo 
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleRemove={remove}
        />
    ));

    return (
        <div>
            <h1>To Do List!</h1>
            <NewToDoForm createToDo={add} />
            {toDoComponents}
        </div>
    );

}

export default ToDoList;