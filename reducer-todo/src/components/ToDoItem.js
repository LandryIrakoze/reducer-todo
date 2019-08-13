import React from 'react';

const ToDoItem = ({ info }) => {

    console.log('itemprops', info);

    return (
        <>
            <p>{info.item}</p><button>X</button>
        </>
    );
}

export default ToDoItem;