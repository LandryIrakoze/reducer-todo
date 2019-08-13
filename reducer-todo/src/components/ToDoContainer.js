import React from 'react';
import TaskInput from './TaskInput';
import ToDoItem from './ToDoItem';

const ToDoContainer = () => {
  return (
    <>
        <TaskInput />
        <ToDoItem />
    </>
  );
}

export default ToDoContainer;