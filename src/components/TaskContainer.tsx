import {useState} from 'react';
import {TaskStructure} from '../utility/types';
import Task from './Task';
import AddTask from './AddTask';

const INITIAL_TASKS: TaskStructure[] =  [
    {
        title: "UX Design",
        completed: false
    }, 
    {
        title: "Decompose UX into components", 
        completed: false
    }
]

export default function TaskContainer() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    const addTaskToList = (title:string) => {
        const addTask = { title: title, completed: false};
        setTasks([...tasks, addTask]);
    };

    return (
        <div>    
            <AddTask addTaskToList={addTaskToList}/>   
            {tasks.map( (task, i) => (
                <Task title= {task.title} id={i} completed={task.completed}/>                  
            ))}
        </div>
    )
}