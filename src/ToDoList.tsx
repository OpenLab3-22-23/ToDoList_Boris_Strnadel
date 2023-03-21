import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { gettodos, supabase } from './supabase/supabaseClient';

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

  useEffect(()=>{
    async function gettodos2() {
    const {data,error}= await gettodos();
    console.log(data)
    console.log(error)
    }
    gettodos2();
  },[])

  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const [dayStr, monthStr, yearStr] = deadline.split(".");
    const deadlineDate = new Date(`${monthStr} ${dayStr}, ${yearStr}`);
    const timeDifference = deadlineDate.getTime() - now.getTime();
  
    const totalSeconds = timeDifference / 1000;
    const totalMinutes = totalSeconds / 60;
    const totalHours = totalMinutes / 60;
    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.floor(totalSeconds % 60);
  
    const deadlineString = deadlineDate.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  
    return {
      total: timeDifference,
      days,
      hours,
      minutes,
      seconds,
      deadline: deadlineString
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
          placeholder="DD.MM.YYYY"
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