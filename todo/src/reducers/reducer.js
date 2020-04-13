import React from 'react'


export const initialState = [{
    item: 'Lean about reducers',
    completed: false,
    id: new Date()
},
{
    item: 'Eat some veggies',
    completed: true,
    id: 2984029834
}]

export const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                item: action.payload,
                completed: false,
                id: new Date()
            }]
        case 'toggle':
            return state.map(todoItem => {
                if (todoItem.id.toString() === action.payload) {
                    return {...todoItem, completed: !todoItem.completed}
                }
                return todoItem
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todoItem => {
                return todoItem.completed === false
            })
    }
}