
import './App.css';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
function App() {
  return (
    <div className="App">
      <h1> todo list</h1>
      <AddTodo/>
    <TodoList/>
    </div>
  );
}

export default App;
