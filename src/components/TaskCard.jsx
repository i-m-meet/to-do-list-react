

const TaskCard = ({task, index, deleteTask, updateTaskStatus}) =>{

  return (
    <div className="flex flex-col gap-3 w-full bg-slate-100 rounded-2xl mb-3 mt-3 h-30 text-[20px] py-2 px-4">
        <div className="flex justify-between">
            <h3 className="font-semibold">{task.input}</h3>
            <button className="border-red-200  rounded-2xl text-sm p-2 hover:text-white hover:bg-red-600 hover:border-none" onClick={()=> deleteTask(index)} >Delete Task</button>
        </div>
        <div className="flex justify-between">
            <div className="flex gap-2">
                {task.categories.map((category, index) => {
                    return (<span key={index} className="bg-gray-200 items-center px-3 rounded-[5px] hover:bg-sky-200">{category}</span>)
                })}
            </div>
            <select  value={task.status} name="" id="" className="rounded-[5px] bg-gray-300 border-1 border-gray-100 p-2" onChange={(e) => updateTaskStatus(index, e.target.value)}>
                <option value=""hidden>change status</option>
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </div>
    </div>
  );
}

export default TaskCard