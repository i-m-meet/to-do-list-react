import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () =>{
  const [tasks, setTasks] = useState([])
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  return (
    <div>
      <Header addTask={addTask}/>
      <Body tasks={tasks}/>
    </div>
  );
}

export default App