import Header from './Header';
import TodosLogic from './ToDoLogic';

const TodoApp = () => (
  <>
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  </>
);
export default TodoApp;
