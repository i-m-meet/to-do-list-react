
const Header = () =>{
  return (
    <div className="m-auto w-[1000px] mt-15">
    <div className=" h-40  flex flex-col justify-center items-center">
        <input type="text" placeholder="Add a task " className="h-15 p-3 text-[20px] rounded-[5px] bg-gray-100 border-1 border-gray-100 w-[700px]"/>
        <div className="flex gap-5 mt-6 text-xl">
            <button className="bg-gray-100 px-2 rounded-[5px] hover:bg-sky-200">Html</button>
            <button className="bg-gray-100 px-2 rounded-[5px] hover:bg-sky-200">Css</button>
            <button className="bg-gray-100 px-2 rounded-[5px] hover:bg-sky-200">Javascript</button>
            <button className="bg-gray-100 px-2 rounded-[5px] hover:bg-sky-200">React</button>
            <select name="Priority" id="" className="rounded-[5px] bg-gray-100 border-1 border-gray-100 p-2">
                <option value="Select the priority" hidden>Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="high">High</option>
            </select>
            <select name="To Do" id="" className="rounded-[5px] bg-gray-100 border-1 border-gray-100 p-2">
                <option value="status" hidden>Select Status</option>
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 rounded-[5px] px-2">+ Add Task</button>
        </div>
    </div>
    </div>
  );
}

export default Header