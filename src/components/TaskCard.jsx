




const TaskCard = ({task, index, deleteTask}) =>{

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
            <select name="" id="" className="rounded-[5px] bg-gray-300 ro;unded-[5px]border-1 border-gray-100 p-2">
                <option value=""hidden>change status</option>
                <option value="">doing</option>
                <option value="">done</option>
            </select>
        </div>
    </div>
  );
}

export default TaskCard