
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <h1 className="mainheading">Hi this is Mohsin Zia. 
        WELCOME TO TODO LIST !
      </h1>
      <div className="todolish"><TodoList /></div>
      
    </div>
  );
}

export default App;
