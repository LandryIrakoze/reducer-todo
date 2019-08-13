import React, { useState, useReducer } from 'react';
import { initialState, listReducer } from '../reducers/listReducer';
import ToDoItem from './ToDoItem';

const TaskInput = () => {

    const [input, setInput] = useState();

    const [state, dispatch] = useReducer(listReducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setInput(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                name="item"
                value={input}
                onChange={handleChanges}
            />
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: input})}>
                Submit
            </button>
            {
                state.toDoList.map(item => (
                    <ToDoItem info={item}/>
                ))
            }
        </>
    );
}

export default TaskInput;