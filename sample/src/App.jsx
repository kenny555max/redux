import "./index.css";
import DisplayTask from "./tasks";
import TodoForm from "./todo-form";

function App (){
  return(
    <div className = "container">
        <h1 className="heading">Tasks For Today...</h1>
        <p className="author">sagittaerys_</p>
        <TodoForm />
        <DisplayTask />
    </div>
  );
}

export default App;