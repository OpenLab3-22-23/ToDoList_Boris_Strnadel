import React, { useState, useEffect } from 'react';
import TodoList from './ToDoList';


const Refresher: React.FC = () => {
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshCount(refreshCount + 1);
    }, 1000); 

    return () => clearInterval(intervalId);
  }, [refreshCount]);

  return (
    <>
      <TodoList />
      <div style={{ display: 'none' }}>{refreshCount}</div>
    </>
  );
};

export default Refresher;