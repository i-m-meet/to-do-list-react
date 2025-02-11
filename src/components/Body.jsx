import Section from "./Section";
import TaskCard from "./TaskCard";

const Body = ({tasks, deleteTask}) => {

    return (
        <div className="h-[1000px] grid grid-cols-3 gap-5 p-6 ">
            <Section name="To do">
                {tasks.filter((task) => task.status === "To Do").map((task, index) => {
                   return <TaskCard key={index} task = {task} index={index} deleteTask={deleteTask}/>
                })}
            </Section>
            <Section name="Doing">
            {tasks.filter((task) => task.status === "Doing").map((task, index) => {
                   return <TaskCard key={index} task = {task} index={index} deleteTask={deleteTask}/>
                })}
            </Section>
            <Section name="Done">
            {tasks.filter((task) => task.status === "Done").map((task, index) => {
                   return <TaskCard key={index} task = {task} index={index} deleteTask={deleteTask}/>
                })}
            </Section>
        </div>
    );
}

export default Body