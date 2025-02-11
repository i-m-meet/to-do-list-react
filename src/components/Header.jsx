import { useState } from "react";

const Header = ({addTask}) => {

    const [selected, setSelected] = useState({
        html: false,
        css: false,
        javascript: false,
        react: false,
    })
    const [input, setInput] = useState('')
    const [taskType, setTaskType]= useState([])
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState({});
    const handleColorToggle = (button) => {
        setSelected((prevState) => ({
            ...prevState, [button]: !prevState[button]
        }))
    }
    const validateConfig = {
        input: [{required: true, message:" input text is required"}],
        priority: [{required: true, message: "Please select the priority"}],
        status: [{required: true, message: "Please select the status "}]
    }

    const validate = (formData) =>{
        const errorsData = {}

        Object.entries(formData).forEach(([key, value]) =>{
            if(!validateConfig[key]) return
            validateConfig[key].some((rule) => {
                if(rule.required && !value){
                    errorsData[key]= rule.message
                    return true
                }
            })
        })
        setErrors(errorsData)
        return errorsData
    }

    const handleInput = (e) => {
        setInput(e.target.value)

        if (e.target.value){
            setErrors((prev) => {
                const {input, ...rest} = prev
                return rest
            })
        }
    }
    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
        if (e.target.value){
            setErrors((prev) => {
                const {priority, ...rest} = prev
                return rest
            })
        }

    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value)
        if (e.target.value){
            setErrors((prev) => {
                const {status, ...rest} = prev
                return rest
            })
        }
    }

    const handleAddTask = () => {
        const selectedOptions = Object.keys(selected).filter((key) => selected[key])
        setTaskType(selectedOptions) 

        const formData = {input, priority, status, categories: selectedOptions}
        const validateFormData = validate(formData)
        if (Object.keys(validateFormData).length ===0) {
            addTask(formData)
            setInput('')
            setPriority('')
            setStatus('')
            setSelected({
                html: false,
                css: false,
                javascript: false,
                react: false,
            })
            console.log("task: " + input)
            console.log(selectedOptions)
            console.log("priority: " + priority)
            console.log("status: " + status)
        } 
    }


    return (
        <div className=" h-40 flex flex-col justify-center items-center m-auto w-[1000px] mt-15">
            <div className="">
                <input type="text" placeholder="Add a task" value={input} onChange={handleInput} className="h-15 p-3 text-[20px] font-semibold rounded-[5px] bg-gray-100 border-1 border-gray-100 w-[800px]" />
                {errors.input && <p className="text-red-500 text-xs">{errors.input}</p>}
                <div className="flex gap-5 mt-6 text-xl">
                    <button className={`${selected.html ? "bg-yellow-300" : "bg-gray-100"} px-2 rounded-[5px] hover:bg-sky-200 `} onClick={() => handleColorToggle('html')} >Html</button>
                    <button className={`${selected.css ? "bg-teal-300" : "bg-gray-100"} px-2 rounded-[5px] hover:bg-sky-200 `} onClick={() => handleColorToggle('css')}>Css</button>
                    <button className={`${selected.javascript ? "bg-pink-300" : "bg-gray-100"} px-2 rounded-[5px] hover:bg-sky-200 `} onClick={() => handleColorToggle('javascript')}>Javascript</button>
                    <button className={`${selected.react ? "bg-violet-300" : "bg-gray-100"} px-2 rounded-[5px] hover:bg-sky-200 `} onClick={() => handleColorToggle('react')}>React</button>
                    <select name="Priority" id="" value={priority} onChange={handlePriorityChange} className="rounded-[5px] bg-gray-100 border-1 border-gray-100 p-2">
                        <option value="Select the priority" hidden>Select priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    {errors.priority && <p className="text-red-500 text-xs">{errors.priority}</p>}
                    <select name="To Do" id="" value={status} onChange={handleStatusChange} className="rounded-[5px] bg-gray-100 border-1 border-gray-100 p-2">
                        <option value="status" hidden>Select Status</option>
                        <option value="To Do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    {errors.status && <p className="text-red-500 text-xs">{errors.status}</p>}
                    <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 rounded-[5px] px-2" onClick={handleAddTask}>+ Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default Header