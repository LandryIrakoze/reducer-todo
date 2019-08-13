export const initialState = {
    toDoList: [
        // {
        //     item: 'Learn about reducers',
        //     completed: false,
        //     id: 3892987589
        // },
    ]
}

export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                toDoList: [...state.toDoList, 
                    {
                        item: action.payload,
                        completed: false,
                        id: new Date(),
                    }] 
            };
        // case 'REMOVE_ITEM':
        //     return {
        //         toDoList: state.todoList.filter(item => item !== action.payload)
        //     };
        // case 'EDIT_ITEM':
        //     return {
        //         ...state,
        //         toDoList:
        //     };
        default: 
            return state;
    }
}