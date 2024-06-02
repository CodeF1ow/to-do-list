import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // Agregar una nueva tarea
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) =>
    // Eliminar una tarea
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    // Alternar el estado de completado de una tarea
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    // Cambiar el estado de edición de una tarea
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    // Editar la tarea existente
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Lista de Tareas</h1>
      {/* Formulario para agregar nuevas tareas */}
      <TodoForm addTodo={addTodo} />
      {/* Mostrar las tareas */}
      {todos.map((todo) =>
        todo.isEditing ? (
          // Formulario de edición de tarea
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          // Componente de tarea
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
