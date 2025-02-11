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

  return (
    <div>
      <Header addTask={addTask}/>
      <Body tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App