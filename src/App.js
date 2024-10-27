import './App.css';
import React from 'react';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoList } from './components/TodoList';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false  },
  { text: 'Besar a Yilis', completed: false  },
  { text: 'Pasear a Lion', completed: false  },
  { text: 'Hacer comida', completed: false  },
  { text: 'Hacer ejercicio', completed: false  },
  { text: 'Viajar a Europa', completed: false  }
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
    <>
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

      <CreateTodoButtom />
    </>
  );
}

export default App;