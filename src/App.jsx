import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () =>{
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i)=> i !== index))
  }

  const updateTaskStatus = (index, newStatus) => {
    setTasks((prev) => prev.map((task, i ) => i === index ? {...task, status: newStatus}: task))
  }

  return (
    <div>
      <Header addTask={addTask}/>
      <Body tasks={tasks} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus}/>
    </div>
  );
}

export default App