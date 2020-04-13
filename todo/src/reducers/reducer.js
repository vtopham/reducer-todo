import React from 'react'


export const initialState = [{
    item: 'Lean about reducers',
    completed: false,
    id: 3892987589
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
                id: Math.floor(Math.random() * 1000000)
            }]
    }
}