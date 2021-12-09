import {useState} from 'react';
import TextField from "@material-ui/core/TextField";

export default function AddTask(props: any) {
    const [newTaskText, setNewTaskText] = useState("");

    const handleAddingTask = (event: any) => {
        if(event.charCode === 13){ 
            props.addTaskToList(newTaskText); 
            setNewTaskText("") 
        }
    }

    return (
        <TextField
            fullWidth 
            onChange={e => setNewTaskText(e.target.value)} 
            value={newTaskText} 
            label={"What's on you mind today?"} 
            onKeyPress={handleAddingTask} 
        />
       
    )
}