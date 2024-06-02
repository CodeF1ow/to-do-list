import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // Prevenir la acción predeterminada
    e.preventDefault();
    if (value) {
      // Agregar la tarea
      addTodo(value);
      // Limpiar el formulario después de enviar
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="¿Cuál es la tarea hoy?"
      />
      <button type="submit" className="todo-btn">
        Agregar tarea
      </button>
    </form>
  );
};
