const TaskCard = ({ task, index, deleteTask, updateTaskStatus }) => {

    const categoryColor = {
        html: "bg-yellow-300",
        css: "bg-teal-300",
        javascript: "bg-pink-300",
        react: "bg-violet-300",
    };

  return (
    <div className="flex flex-col gap-3 w-full bg-slate-100 rounded-2xl mb-3 mt-3 h-30 text-[20px] py-2 px-4 sm:w-80 md:w-96 lg:w-1/3">
        <div className="flex justify-between">
            <h3 className="font-semibold text-sm md:text-base">{task.input}</h3>
            <button className="border-red-200 rounded-2xl text-sm p-2 hover:text-white hover:bg-red-600 hover:border-none" onClick={() => deleteTask(index)}>Delete Task</button>
        </div>
        <div className="flex justify-between">
            <div className="flex gap-2 flex-wrap">
                {task.categories.map((category, index) => {
                    return (<span key={index} className={`${categoryColor[category]} items-center px-3 rounded-[5px]`}>{category}</span>);
                })}
            </div>
            <select value={task.status} name="" id="" className="rounded-[5px] bg-gray-300 border-1 border-gray-100 p-2 text-xs sm:text-sm" onChange={(e) => updateTaskStatus(index, e.target.value)}>
                <option value="" hidden>Change Status</option>
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </div>
    </div>
  );
}

export default TaskCard;
