import React from 'react';
import { addTodo } from "../store/todoSilce"
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import InputFile from './InputFile';
const TodoApp = () => {
    const [text, setText] = React.useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo(text))
        setText('')
    }
    return (
        <div>
            <InputFile text={text} handleInput={setText} handelSubmit={addTask} />
            <TodoList />
        </div>
    );
};

export default TodoApp;