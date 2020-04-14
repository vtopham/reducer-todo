import React, {useReducer} from 'react'
import styled from 'styled-components'
import Form from './Form'
import TodoList from './TodoList'



const Todo = (props) => {

    const {todoList, dispatchTodoList} = props
   
    const handleClear = (event) => {
        event.preventDefault()
        dispatchTodoList({type:'CLEAR_COMPLETED'})
    }
    

    return (
        <>
        <h1>Todo!</h1>
        <button onClick = {handleClear}>Clear Completed</button>
        <Form dispatch = {dispatchTodoList}/>
        <TodoList todoList = {todoList} dispatchTodoList = {dispatchTodoList}/>
        </>
    )
}

export default Todo