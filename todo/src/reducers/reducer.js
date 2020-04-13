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
    console.log("reducer runs")
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'add':
            return [...state, {
                item: action.payload,
                completed: false,
                id: new Date()
            }]
        case 'toggle':
            return state.map(todoItem => {
                // console.log(action.payload)
                // console.log(todoItem)
                if (todoItem.id.toString() === action.payload) {
                    return {...todoItem, completed: !todoItem.completed}
                }
                return todoItem
            })
    }
}