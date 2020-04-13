import React from 'react'
import styled from 'styled-components'

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
const TodoList = (props) => {

    const {todoList, dispatchTodoList} = props

    const handleToggle = (event) => {
        event.preventDefault()
        dispatchTodoList({type: "toggle", payload: event.target.className})
    }

    
    
        return (
            <>
            {todoList.map(task => {
                return(
                    <NewTask key = {task.id}>
                        <h3>{task.item}</h3>
                        {task.completed === true? <p>This task is complete!</p> : <p>This task is not complete.</p>}
                        <button onClick = {handleToggle} className = {task.id}>{task.completed === true ? "Uncomplete Task" : "Complete Task"}</button>
                    </NewTask>
                )
            })}
            </>
        )

        
    
}

export default TodoList