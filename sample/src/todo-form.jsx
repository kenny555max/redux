import { useState } from "react";
import { useDispatch } from 'react-redux'
import { save_task } from "./features/task/taskSlice";

function TaskForm(){
    const [title, setTitle] = useState('');
    const [date, setData] = useState('');

    // this sends data to to our taskSlice
    const dispatch = useDispatch()

    const handleSubmitTask = () => {
        //validation
        let taskObj = {
            title,
            date
        }

        // dispatch the taskObj to redux - database/store
        dispatch(save_task(taskObj));

        console.log('both the input for title and the date');
    }

    return(
      <div className="todo-input">
        <form className="input-todo">
            <input type="text" id="todoInput" placeholder="Enter a task" />
            <input type="date" id="todoDate" />
            <button onClick={handleSubmitTask} type="button" id="addTask">Add Task</button>
        </form>
    </div>
    );
}
  
export default TaskForm;