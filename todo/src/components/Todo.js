import React, {useReducer} from 'react'
import styled from 'styled-components'
import Form from './Form'
import TodoList from './TodoList'



const Todo = (props) => {

    const {todoList, dispatchTodoList} = props
   
    

    return (
        <>
        <h1>Todo!</h1>
        <Form dispatch = {dispatchTodoList}/>
        <TodoList todoList = {todoList} dispatchTodoList = {dispatchTodoList}/>
        </>
    )
}

export default Todo