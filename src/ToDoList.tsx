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


  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const deadlineArray = deadline.split("/");
    const deadlineDate = new Date(
      parseInt(deadlineArray[2]),
      parseInt(deadlineArray[1]) - 1,
      parseInt(deadlineArray[0])
    );
    const timeDifference = deadlineDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return {
      total: timeDifference,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };


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
          <li className='liwrap' key={index}>
            <div className='wrap'>
            <input
              name='checkbox'
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span className='TodoText'> 
              {todo.text} :
            </span>
            <span className='Deadlinetext'>{getTimeRemaining(todo.deadline).days} days, {getTimeRemaining(todo.deadline).hours} hours, {getTimeRemaining(todo.deadline).minutes} minutes and {getTimeRemaining(todo.deadline).seconds} seconds</span>
            <button className='delbutt' onClick={() => deleteTodo(todo.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default TodoList;