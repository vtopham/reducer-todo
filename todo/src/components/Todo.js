import React, {useReducer} from 'react'
import {reducer, initialState} from '../reducers/reducer'
import styled from 'styled-components'
import Form from './Form'

const NewTask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 2% auto;
    padding: 2%;

    border: 1px solid lightgray;
    border-radius: 10px;
    width: 40%;
    

    
    * {
        margin: 1%;
        padding: 1%;
    }

    


`

const Todo = () => {

    const [todoList, dispatchTodoList] = useReducer(reducer, initialState)
   

    return (
        <>
        <h1>Todo!</h1>
        <Form dispatch = {dispatchTodoList}/>
        {todoList.map(task => {
            return(
                <NewTask key = {task.id}>
                    <h3>{task.item}</h3>
                    {task.completed === true? <p>This task is complete!</p> : <p>This task is not complete.</p>}
                    
                </NewTask>
            )
        })}
        </>
    )
}

export default Todo