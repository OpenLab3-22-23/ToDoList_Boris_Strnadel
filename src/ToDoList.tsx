import React, { useState } from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleToggle = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className='All'>
        <h3 className='AddNewTask'>Add new task:</h3>
      <form onSubmit={handleSubmit}>
        <input
          className='InputTo'
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Task name..."
        />
        <div>
            <input
          className='InputToDeadline'
          type="text"
          placeholder="Deadline..."
        />
        </div>
        <div>
            <button className='Addbutton' type="submit">Add +</button>
        </div>
        
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;