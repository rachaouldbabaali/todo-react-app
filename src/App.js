import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ToDoApp />} />
      </Routes>
    </>
  );
}
export default App;
