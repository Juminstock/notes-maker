import './App.css';
import React from 'react';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoCreate } from './components/TodoCreate';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false  },
  { text: 'Besar a Yilis', completed: false  },
  { text: 'Pasear a Lion', completed: false  }
];

function App() {
  const [todos, setTodos] = React.useState( defaultTodos );
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const searchedTodos = todos.filter((todo) => {return todo.text.toLowerCase().includes(searchValue.toLowerCase());});

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <div className='left-section'>
        <TodoCreate />
      </div>
      <div className='right-section'>
        <TodoCounter 
          completed={ completedTodos } 
          total={ todos.length }
        />

        <TodoSearch 
        searchValue={ searchValue }
        setSearchValue={ setSearchValue }
        />

        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
              key={ todo.text } 
              text={ todo.text }
              completed={ todo.completed }
              onComplete={ () => completeTodo(todo.text) }
              onDelete={ () => deleteTodo(todo.text) }
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export default App;