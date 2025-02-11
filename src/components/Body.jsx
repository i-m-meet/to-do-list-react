import Section from "./Section";
import TaskCard from "./TaskCard";

const Body = ({ tasks, deleteTask, updateTaskStatus }) => {

    return (
        <div className="h-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
            <Section name="To Do">
                {tasks.filter((task) => task.status === "To Do").map((task, index) => {
                   return <TaskCard key={index} task={task} index={index} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
                })}
            </Section>
            <Section name="Doing">
                {tasks.filter((task) => task.status === "Doing").map((task, index) => {
                   return <TaskCard key={index} task={task} index={index} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
                })}
            </Section>
            <Section name="Done">
                {tasks.filter((task) => task.status === "Done").map((task, index) => {
                   return <TaskCard key={index} task={task} index={index} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
                })}
            </Section>
        </div>
    );
}

export default Body;
