import { useSelector } from 'react-redux'

function DisplayTasks (){
  const tasks = useSelector((state) => state.tasks);

  console.log(tasks);

  return(
    <div className="task-container">
      <h1 style={{ textAlign: 'center' }}>Active Tasks!</h1>
      <ul id="todoList"></ul> 
      {/* <h3 style={{ color: "red"}}>Olamilekan</h3> */}
    </div>
  );
}

export default DisplayTasks;