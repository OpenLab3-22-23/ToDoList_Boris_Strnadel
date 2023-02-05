import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  deadline: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDeadline, setNewDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { text: newTodo, completed: false, id: todos.length +1 ,deadline: newDeadline}]);
    setNewTodo('');
    setNewDeadline('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDeadline(e.target.value);
  };

  const handleToggle = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
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
          placeholder="DD/MM/YYYY"
          onChange={handleDeadlineChange}
          value={newDeadline}
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
            <span className='TodoText'>
              {todo.text}
            </span>
            <span className='Deadlinetext'>Deadline: {todo.deadline}</span>
            <button className='delbutt' onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;