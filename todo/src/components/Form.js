import React, {useState} from 'react'

const Form = (props) => {
    const {dispatch} = props
    const [taskInput, setTaskInput] = useState("")

    const handleInputChange = (event) => {
        event.preventDefault()
        setTaskInput(event.target.value)
    }
    const handleAdd = (event) => {
        event.preventDefault()
        dispatch({type: "add", payload: taskInput})
    }
    return (
        <>
        <form>
            <label htmlFor = "taskInput">Task Description: </label>
            <input type = "text" id = "taskInput" name = "taskInput" 
            value = {taskInput}
            onChange = {handleInputChange}/>
            <button onClick = {handleAdd}>Add Task</button>
        </form>

        </>
    )
}

export default Form