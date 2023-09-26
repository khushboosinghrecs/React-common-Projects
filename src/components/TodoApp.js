// src/components/TodoApp.js
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    if (task.trim() !== '') {
      const newTodo = { id: Date.now(), text: task, completed: false };
      setTodos([...todos, newTodo]);
      setTask('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const startEditing = (id) => {
    setEditingId(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setTask(todoToEdit.text);
  };

  const updateTodo = () => {
    if (task.trim() !== '') {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: task } : todo
      );
      setTodos(updatedTodos);
      setTask('');
      setEditingId(null);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {editingId === null ? (
          <button onClick={addTodo}>Add</button>
        ) : (
          <button onClick={updateTodo}>Update</button>
        )}
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            {editingId === todo.id ? (
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            {editingId === todo.id ? (
              <button onClick={updateTodo}>Save</button>
            ) : (
              <button onClick={() => startEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
