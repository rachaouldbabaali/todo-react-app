import InputTodo from "./InputToDo";
import TodosList from "./TodoList";
import { useState } from "react";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false,
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} handleChange={handleChange} />
    </div>
  );
};
export default TodosLogic;
