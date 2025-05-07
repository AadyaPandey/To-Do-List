import { useState} from "react"

export default function ToDoList(){
    const [task,setTask]=useState([])
    const [newTask,setNewTask]=useState("")

    const handleInput=(e)=>{
        setNewTask(e.target.value);
    }
    const addtask=()=>{
        if (newTask.trim()!=""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }else{
            alert("Please enter a task");
        }
        
    }
    const removetask=(index)=>{
        setTask(task.filter((_,i)=>{
            return (i !== index)
        }))
    }
    const taskup=(index)=>{
        if(index>0){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTask(updatedTask);}
    }
    const taskdown=(index)=>{
        if(index<task.length-1){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return(
        <div className="container">
            <h1 className="heading">To-Do-List</h1>
            <div>
                <input 
                    className="input" 
                    id="task_entry" 
                    value={newTask} 
                    onChange={handleInput} 
                    type="text" 
                    placeholder="Enter your task"/>
                <button 
                    className="add-button" 
                    onClick={addtask}>
                    Add
                </button>
            </div>
            <div>
                <ol>
                    {task.map((task,index)=>
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span> 
                        <div className="button-box">
                        <button 
                        className="delete-button"
                        onClick={()=>removetask(index)} 
                         >
                        Delete
                        </button>
                        <button 
                        className="move-button"
                        onClick={()=>taskup(index)} 
                         >
                        👆
                        </button>
                        <button 
                        className="move-button"
                        onClick={()=>taskdown(index)} 
                         >
                        👇
                        </button>
                        </div>

                    </li>)}
                    
                </ol>
            </div>
            
        </div>
    )
}