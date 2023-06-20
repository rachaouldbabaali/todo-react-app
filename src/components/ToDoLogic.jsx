import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputToDo';
import TodosList from './TodoList';

const TodosLogic = () => {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos());
  const handleChange = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };
  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todosProps={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    </div>
  );
};
export default TodosLogic;
