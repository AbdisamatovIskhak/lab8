import React from 'react';

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, completed, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={completed} onChange={handleToggle} />
          <label className="form-check-label" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {title}
          </label>
        </div>
        <button className="btn btn-danger mt-2" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;