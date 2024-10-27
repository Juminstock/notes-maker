import './App.css';
import React from 'react';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButtom } from './components/CreateTodoButtom';
import { TodoList } from './components/TodoList';

const defaultTodos = [
  { text: 'Cortal cebolla', completed: false  },
  { text: 'Besar a Yilis', completed: false  },
  { text: 'Pasear a Lion', completed: false  },
  { text: 'Hacer comida', completed: false  },
  { text: 'Hacer ejercicio', completed: false  },
  { text: 'Viajar a Europa', completed: false  }
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={ 0 } total={ defaultTodos.length }/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;