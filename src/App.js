import "./App.css";
import AddTask from "./components/AddTask";
import FilterTasks from "./components/FilterTasks";
import TaskList from "./components/TaskList";
import "../src/components/task.css";
function App() {
  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>
      <AddTask />
      <FilterTasks />
      <TaskList />
    </div>
  );
}

export default App;
