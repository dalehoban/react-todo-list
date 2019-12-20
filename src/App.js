import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
