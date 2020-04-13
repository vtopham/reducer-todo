import React, {useReducer}from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

import {reducer, initialState} from './reducers/reducer'

function App() {

  const [todoList, dispatchTodoList] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <Todo todoList = {todoList} dispatchTodoList = {dispatchTodoList}/>
    </div>
  );
}

export default App;
