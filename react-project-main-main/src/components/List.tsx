// List.tsx
import React, { useState } from 'react';
import Todo from './Todo';

const List: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', createdTime: new Date(), createdDate: new Date().toLocaleDateString(), completed: false },
    { id: 2, title: 'Task 2', createdTime: new Date(), createdDate: new Date().toLocaleDateString(), completed: true },
    { id: 3, title: 'Task 3', createdTime: new Date(), createdDate: new Date().toLocaleDateString(), completed: false },
  ]);

  const [filter, setFilter] = useState('all'); // 'all' по умолчанию

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggle = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Task ${tasks.length + 1}`,
      createdTime: new Date(),
      createdDate: new Date().toLocaleDateString(),
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.completed);

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="filters">
        <label htmlFor="filter">Filter by Status:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {filteredTasks.map(task => (
          <Todo key={task.id} {...task} onDelete={handleDelete} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default List;