import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // Prevenir la acción predeterminada
    e.preventDefault();
    // Editar la tarea
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Actualiza la tarea"
      />
      <button type="submit" className="todo-btn">
        Actualizar tarea
      </button>
    </form>
  );
};
